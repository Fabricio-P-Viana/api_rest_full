# API REST FULL
uma api rest utilizando node.js, express, sequelize e muitas outras tecnologias
Você precisará ter na sua maquina instalado o node.js e utilzar mariaDB como database
nesta API você poderá encotrar sistema de login com JWT, e crud de alunos com imagens
<br>
# ROTAS COM NOMES CERTOS
index -> lista todos os usuarios -> get<br>
store/create -> cria um novo usuario -> post<br>
delete -> exclui um usuario -> delete<br>
show -> mostra os usuarios -> get<br>
update -> atualiza um usuario -> patch ou put<br>

<h2>Para subir o projeto no ar crie o arquivo .env na base do projeto, com as seguintes informações</h2>

<ul>
  <li>DATABASE=escola</li>
  <li>DATABASE_HOST=seuHostAqui</li>
  <li>DATABASE_PORT=portaDoSeuDataBase</li>
  <li>DATABASE_USERNAME=root</li>
  <li>DATABASE_PASSWORD=senhaDoSeuDatabase</li>
  <li>TOKEN_SECRET=SeuSecret</li>
  <li>TOKEN_EXPIRATION=prazoParaExpirarSeuToken ex: 7d</li>
  <li>APP_URL=http://localhost:3301</li>
  <li>APP_PORT=3001</li>
</ul>

<h2>Execute os comandos no terminal abaixo:</h2>

<ul>
<li>npm i</li>
  <p>instalando todos os node_modules utilizados</p>
<li>npx sequelize db:migrate</li>
  <p>Migrate: são modificações que ocorreram no desenvolvimento e estão registradas na pasta /database/migrations</p>
<li>npx sequelize db:seed:all</li>
  <p>seeds: são valores padrão para utilzarmos como base para testes e deploy, para termos alguns alunos já caadastrados</p>
<li>npm run dev</li>
  <p>iniciando o sistema.</p>
<li>agora sua API está rodando no endereço http://127.0.0.1:3001/.</li>
</ul>

Você pode obter o token JWT na rota /tokens, passando os dados JSON:

{<br>
	"email": "admin@email.com",<br>
	"password": "123456"<br>
}<br>
<br><br><br>

