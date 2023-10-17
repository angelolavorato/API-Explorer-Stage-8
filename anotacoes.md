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

