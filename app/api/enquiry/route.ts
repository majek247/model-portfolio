import {NextResponse} from 'next/server';
export const runtime='nodejs';
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error=(message:string,status:number)=>NextResponse.json({error:message},{status});
export async function POST(request:Request){
 // Same-origin browser requests only. Configure rate limiting at your host for
 // production; an in-memory counter does not protect distributed deployments.
 const origin=request.headers.get('origin');
 if(origin&&origin!==new URL(request.url).origin)return error('This request could not be accepted.',403);
 if(!request.headers.get('content-type')?.includes('application/json'))return error('Expected a JSON request.',415);
 if(Number(request.headers.get('content-length')||0)>12000)return error('Your enquiry is too long.',413);
 let data:Record<string,unknown>;
 try{const raw=await request.text();if(raw.length>12000)return error('Your enquiry is too long.',413);const parsed:unknown=JSON.parse(raw);if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))return error('Please check the enquiry fields.',400);data=parsed as Record<string,unknown>;}catch{return error('Please check the enquiry fields.',400)}
 if(data.website)return error('This request could not be accepted.',400);
 const fields=['name','email','project','location','budget','usage'] as const;
 const values:Record<string,string>={};
 for(const key of fields){if(typeof data[key]!=='string')return error('Please complete every field.',400);values[key]=(data[key] as string).trim();if(!values[key]||values[key].length>(key==='project'?3000:key==='email'?254:150))return error('Please check the length of your enquiry fields.',400)}
 if(!emailPattern.test(values.email)||/[\r\n]/.test(values.email))return error('Please enter a valid email address.',400);
 const {RESEND_API_KEY,ENQUIRY_TO,ENQUIRY_FROM}=process.env;
 if(!RESEND_API_KEY||!ENQUIRY_TO||!ENQUIRY_FROM)return error('Online enquiries are not available yet. Please try again later.',503);
 try{
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({from:ENQUIRY_FROM,to:[ENQUIRY_TO],reply_to:values.email,subject:'New MUIZ portfolio enquiry',text:fields.map(key=>`${key.toUpperCase()}\n${values[key]}`).join('\n\n')}),signal:AbortSignal.timeout(12000)});
  if(!response.ok)return error('Your message could not be delivered. Please try again later.',502);
  return NextResponse.json({ok:true});
 }catch{return error('The email service is temporarily unavailable. Please try again later.',502)}
}
