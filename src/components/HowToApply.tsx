import { Button } from '@/components/Button'
import { CodeGroup, pre as Pre } from '@/components/mdx'
import { Note } from '@/components/mdx'

export function HowToApply() {
  return (
    <div id="how-to-apply">
      <h1>Cómo postular</h1>
      
      <p className="lead">
        Esta guía te llevará a través del proceso de postulación en Bemmbo. Cubriremos cómo iniciar tu postulación y qué esperar durante el proceso de entrevistas. Nuestro objetivo es hacer el proceso lo más transparente y directo posible.
      </p>

      <Note>
        El proceso de postulación consiste en varios pasos, desde una charla inicial con los fundadores
        hasta una reunión final de café en nuestra oficina.
      </Note>

      <h2>Pasos de la postulación</h2>

      <ol>
        <li>Envía tu postulación usando nuestros endpoints de API</li>
        <li>Entrevista corta con fundadores para asegurar alineación</li>
        <li>Revisión de tarea frontend - simulando una entrega real de feature de Bemmbo</li>
        <li>Entrevista técnica con un miembro del equipo (live coding de un problema simple)</li>
        <li>Charla de café en nuestra oficina para fit cultural ☕</li>
      </ol>

      <h2>Haciendo tu request de postulación</h2>

      <p>
        Para iniciar tu proceso de postulación, necesitarás hacer dos llamadas a la API. Primero, obtén tu token de pregunta, luego envía tu postulación. Aquí te mostramos cómo hacerlo usando diferentes métodos:
      </p>

      <CodeGroup title="Obtén tu pregunta de postulación" tag="GET" label="recruiting.data.bemmbo.com/start">
        <Pre title="cURL" code={`# Obtén tu pregunta de postulación
curl -X GET https://recruiting.data.bemmbo.com/start`}>
          {`# Obtén tu pregunta de postulación
curl -X GET https://recruiting.data.bemmbo.com/start`}
        </Pre>
        <Pre title="JavaScript" code={`// Obtén tu pregunta de postulación
fetch('https://recruiting.data.bemmbo.com/start', {
  method: 'GET'
})`}>
          {`// Obtén tu pregunta de postulación
fetch('https://recruiting.data.bemmbo.com/start', {
  method: 'GET'
})`}
        </Pre>
        <Pre title="Python" code={`# Obtén tu pregunta de postulación
import requests

response = requests.get('https://recruiting.data.bemmbo.com/start')`}>
          {`# Obtén tu pregunta de postulación
import requests

response = requests.get('https://recruiting.data.bemmbo.com/start')`}
        </Pre>
      </CodeGroup>

      <p>
        Una vez que tengas tu pregunta y respuesta, envía tu postulación con tu información personal:
      </p>

      <CodeGroup title="Envía tu postulación" tag="POST" label="recruiting.data.bemmbo.com/apply">
        <Pre title="cURL" code={`curl -X POST https://recruiting.data.bemmbo.com/apply \\
  -H "Content-Type: application/json" \\
  -d '{
    "token": "tu_respuesta_aqui",
    "name": "Erlich Bachman",
    "phoneNumber": "+56912341234",
    "email": "erlich@bachman.com",
    "cvURL": "https://some-url.com/cv-erlichbachman",
    "githubURL": "https://github.com/erlichbachman",
    "linkedinURL": "https://linkedin.com/erlichbachman"
  }'`}>
          {`curl -X POST https://recruiting.data.bemmbo.com/apply \\
  -H "Content-Type: application/json" \\
  -d '{
    "token": "tu_respuesta_aqui",
    "name": "Erlich Bachman",
    "phoneNumber": "+56912341234",
    "email": "erlich@bachman.com",
    "cvURL": "https://some-url.com/cv-erlichbachman",
    "githubURL": "https://github.com/erlichbachman",
    "linkedinURL": "https://linkedin.com/erlichbachman"
  }'`}
        </Pre>
        <Pre title="JavaScript" code={`// Envía tu postulación
fetch('https://recruiting.data.bemmbo.com/apply', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    token: 'tu_respuesta_aqui',
    name: 'Erlich Bachman',
    phoneNumber: '+56912341234',
    email: 'erlich@bachman.com',
    cvURL: 'https://some-url.com/cv-erlichbachman',
    githubURL: 'https://github.com/erlichbachman',
    linkedinURL: 'https://linkedin.com/erlichbachman' // opcional
  })
})`}>
          {`// Envía tu postulación
fetch('https://recruiting.data.bemmbo.com/apply', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    token: 'tu_respuesta_aqui',
    name: 'Erlich Bachman',
    phoneNumber: '+56912341234',
    email: 'erlich@bachman.com',
    cvURL: 'https://some-url.com/cv-erlichbachman',
    githubURL: 'https://github.com/erlichbachman',
    linkedinURL: 'https://linkedin.com/erlichbachman' // opcional
  })
})`}
        </Pre>
        <Pre title="Python" code={`# Envía tu postulación
import requests

application_data = {
    'token': 'tu_respuesta_aqui',
    'name': 'Erlich Bachman',
    'phoneNumber': '+56912341234',
    'email': 'erlich@bachman.com',
    'cvURL': 'https://some-url.com/cv-erlichbachman',
    'githubURL': 'https://github.com/erlichbachman',
    'linkedinURL': 'https://linkedin.com/erlichbachman'  # opcional
}

requests.post(
    'https://recruiting.data.bemmbo.com/apply',
    json=application_data
)`}>
          {`# Envía tu postulación
import requests

application_data = {
    'token': 'tu_respuesta_aqui',
    'name': 'Erlich Bachman',
    'phoneNumber': '+56912341234',
    'email': 'erlich@bachman.com',
    'cvURL': 'https://some-url.com/cv-erlichbachman',
    'githubURL': 'https://github.com/erlichbachman',
    'linkedinURL': 'https://linkedin.com/erlichbachman'  # opcional
}

requests.post(
    'https://recruiting.data.bemmbo.com/apply',
    json=application_data
)`}
        </Pre>
      </CodeGroup>

      <Note>
        Todos los campos son requeridos excepto `linkedinURL` que es opcional. Asegúrate de incluir
        URLs válidas para tu CV y perfil de GitHub.
      </Note>


      <h2>¿Qué sigue?</h2>

      <p>Después de enviar tu postulación, esto es lo que puedes esperar:</p>

      <ul>
        <li>Revisaremos tu postulación y te responderemos lo antes posible</li>
        <li>Si hay un potencial match, programaremos una entrevista con los founders</li>
        <li>Se asignará una tarea de frontend de forma remota con los requerimientos claros</li>
        <li>Se realizará una prueba de programación en vivo con algunos de nuestros ingenieros</li>
        <li>Un café para conocer al equipo y evaluar el fit cultural</li>
      </ul>
    </div>
  )
} 