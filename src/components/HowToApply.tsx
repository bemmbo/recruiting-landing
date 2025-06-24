import { Button } from '@/components/Button'
import { CodeGroup, pre as Pre } from '@/components/mdx'
import { Note } from '@/components/mdx'

export function HowToApply() {
  return (
    <div id="how-to-apply">
      <h1>How to apply</h1>
      
      <p className="lead">
        This guide will walk you through the application process at Bemmbo. We'll cover how to start your application and what to expect during the interview process. Our goal is to make the process as transparent and straightforward as possible.
      </p>

      <Note>
        The application process consists of several steps, from an initial chat with founders
        to a final coffee meeting at our office. Each step helps us ensure we're a great match!
      </Note>

      <h2>Application steps</h2>

      <ol>
        <li>Submit your application using our API endpoints</li>
        <li>Short interview with founders to ensure alignment</li>
        <li>Frontend task review - simulating a real Bemmbo feature delivery</li>
        <li>Technical interview with a team member (live coding of a simple problem)</li>
        <li>Coffee chat at our office for cultural fit ☕</li>
      </ol>

      <h2>Making your application request</h2>

      <p>
        To start your application process, you'll need to make two API calls. First, get your question token, then submit your application. Here's how to do it using different methods:
      </p>

      <CodeGroup title="Get your application question" tag="GET" label="recruiting.api.bemmbo.com/start">
        <Pre title="cURL" code={`# Get your application question
curl -X GET https://recruiting.api.bemmbo.com/start`}>
          {`# Get your application question
curl -X GET https://recruiting.api.bemmbo.com/start`}
        </Pre>
        <Pre title="JavaScript" code={`// Get your application question
fetch('https://recruiting.api.bemmbo.com/start', {
  method: 'GET'
})`}>
          {`// Get your application question
fetch('https://recruiting.api.bemmbo.com/start', {
  method: 'GET'
})`}
        </Pre>
        <Pre title="Python" code={`# Get your application question
import requests

response = requests.get('https://recruiting.api.bemmbo.com/start')`}>
          {`# Get your application question
import requests

response = requests.get('https://recruiting.api.bemmbo.com/start')`}
        </Pre>
      </CodeGroup>

      <p>
        Once you have your question and answer, submit your application with your personal information:
      </p>

      <CodeGroup title="Submit your application" tag="POST" label="recruiting.api.bemmbo.com/apply">
        <Pre title="cURL" code={`curl -X POST https://recruiting.api.bemmbo.com/apply \\
  -H "Content-Type: application/json" \\
  -d '{
    "token": "your_answer_here",
    "name": "Erlich Bachman",
    "phoneNumber": "+56912341234",
    "email": "erlich@bachman.com",
    "cvURL": "https://some-url.com/cv-erlichbachman",
    "githubURL": "https://github.com/erlichbachman",
    "linkedinURL": "https://linkedin.com/erlichbachman"
  }'`}>
          {`curl -X POST https://recruiting.api.bemmbo.com/apply \\
  -H "Content-Type: application/json" \\
  -d '{
    "token": "your_answer_here",
    "name": "Erlich Bachman",
    "phoneNumber": "+56912341234",
    "email": "erlich@bachman.com",
    "cvURL": "https://some-url.com/cv-erlichbachman",
    "githubURL": "https://github.com/erlichbachman",
    "linkedinURL": "https://linkedin.com/erlichbachman"
  }'`}
        </Pre>
        <Pre title="JavaScript" code={`// Submit your application
fetch('https://recruiting.api.bemmbo.com/apply', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    token: 'your_answer_here',
    name: 'Erlich Bachman',
    phoneNumber: '+56912341234',
    email: 'erlich@bachman.com',
    cvURL: 'https://some-url.com/cv-erlichbachman',
    githubURL: 'https://github.com/erlichbachman',
    linkedinURL: 'https://linkedin.com/erlichbachman' // optional
  })
})`}>
          {`// Submit your application
fetch('https://recruiting.api.bemmbo.com/apply', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    token: 'your_answer_here',
    name: 'Erlich Bachman',
    phoneNumber: '+56912341234',
    email: 'erlich@bachman.com',
    cvURL: 'https://some-url.com/cv-erlichbachman',
    githubURL: 'https://github.com/erlichbachman',
    linkedinURL: 'https://linkedin.com/erlichbachman' // optional
  })
})`}
        </Pre>
        <Pre title="Python" code={`# Submit your application
import requests

application_data = {
    'token': 'your_answer_here',
    'name': 'Erlich Bachman',
    'phoneNumber': '+56912341234',
    'email': 'erlich@bachman.com',
    'cvURL': 'https://some-url.com/cv-erlichbachman',
    'githubURL': 'https://github.com/erlichbachman',
    'linkedinURL': 'https://linkedin.com/erlichbachman'  # optional
}

requests.post(
    'https://recruiting.api.bemmbo.com/apply',
    json=application_data
)`}>
          {`# Submit your application
import requests

application_data = {
    'token': 'your_answer_here',
    'name': 'Erlich Bachman',
    'phoneNumber': '+56912341234',
    'email': 'erlich@bachman.com',
    'cvURL': 'https://some-url.com/cv-erlichbachman',
    'githubURL': 'https://github.com/erlichbachman',
    'linkedinURL': 'https://linkedin.com/erlichbachman'  # optional
}

requests.post(
    'https://recruiting.api.bemmbo.com/apply',
    json=application_data
)`}
        </Pre>
      </CodeGroup>

      <Note>
        All fields are required except for `linkedinURL` which is optional. Make sure to include
        valid URLs for your CV and GitHub profile.
      </Note>


      <h2>What's next?</h2>

      <p>After submitting your application, here's what you can expect:</p>

      <ul>
        <li>We'll review your application and get back to you shortly</li>
        <li>If there's a potential match, we'll schedule the founder interview</li>
        <li>Frontend task will be assigned with clear requirements</li>
        <li>Technical interview will focus on practical programming skills</li>
        <li>Final coffee chat to meet the team and discuss next steps</li>
      </ul>
    </div>
  )
} 