**ROTAS**

_Métodos de requisições:_
-GET ->Leitura
-POT ->Criação
-PUT ->Atualização
-DELETE ->Deleção
-PATCH ->Atualização parcial

**ROUTE PARAMS**
Estrategia utilizada para passar valores como parâmetros pra a rota
Params são utilizados para dados simples como ID's de produtos

**QUERY PARAMS**
_modelo_
https://enderecodoservidor.com.br/users/?page=2&limit=10

users = recurso
? = Separador
page = chave
2 = valor
& = separador
limit = chave
10 = valor

**HTTP CODES**
1xx = informativo ex. "a solicitação foi aceita ou o processamento continua em andamento"
102 - Processando

2xx = Success
200 - Requisição bem sucedida
201 - Criado - geralmente utilizado para o POST após uma inserção

3xx = Redirect
301 - Movido permanentemente
302 - Movido

4xx - Erro do cliente
400 - Bad request
401 - Unauthorized
404 - Not found

5xx - Erro no servidor
500 - Erro interno

**MIDDLEWARE**
Middleware são funções que tem acesso ao objeto de solicitação (requisição), o objeto de resposta (resposta), e a próxima função de middleware no ciclo solicitação-resposta do aplicativo.
A próxima função middleware é comumente denotada por uma variável chamada next.

Middleware pode
-Executar qualquer código
-Fazer mudanças nos objetos
-Encerrar o ciclo de solicitação-resposta
-Chamar o próximo middleware da pilha

**SQL COMANDOS DML** (Data Manipulation Language)
C - Create -> Insert
R - Read -> Select
U - Update -> Update
D - Delete -> Delete

**MIGRATIONS**
É uma forma de versionar a base de dados
Migrations trabalha na manipulação da base de dados: criando, alterando ou removendo

_Métodos_
UP - método responsável por criar ou alterar algo no banco de dados
DOWN - responsável pelo rollback. Ou seja, desfazer as alterações realizadas pela migration.
