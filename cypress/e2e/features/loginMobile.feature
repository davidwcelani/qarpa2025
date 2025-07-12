#language: pt

@login
Funcionalidade: Validação do login do saucedemo
    Cenários voltados para os os testes de login do saucedemo

Contexto: O usuário deve estar na página de login do saucedemo
     Dado que eu acesse a página de login

    # Cenário: Validação do login válido
    #     Quando eu preencho o campo login "standard_user"
    #     E eu preencher a senha "secret_sauce"
    #     E eu clico em "LOGIN"
    #     Então o sistema irá para a tela de "Catálogo de produtos"

@login_valido
Cenário: Validação de Login com credenciais válidas no iphone-xr
    Quando eu esteja usando o dispositivo "iphone-xr"
    E eu faço login válido
    Então eu devo ser redirecionado para a tela de "Products"
    E os produtos devem ser exibidos em uma única coluna vertical

  Esquema do Cenário: Login bem-sucedido em diferentes tamanhos de tela
    Dado eu esteja usando o dispositivo <dispositivo>
    E eu faço login válido
    Então eu devo ser redirecionado para a tela de "Products"
    E os produtos devem ser exibidos em uma única coluna vertical

    Exemplos:
      | dispositivo   |
      | "iphone-xr"   |
      | "samsung-s10" |
      | "[412, 915]"  |
      | "pixel-7"     |  

# @login_invalido
# Esquema do Cenário: Validação de Login com credenciais inválidas com mensagem
#     Quando eu preencho os campos de usuário e senha com as credenciais do usuário <perfil_usuario>
#     E eu clico no botão "LOGIN"
#     Então o sistema deve exibir a mensagem de erro <mensagem>

#     Exemplos:
#         | perfil_usuario    | mensagem | 
#         | "locked_out_user"   | "Epic sadface: Sorry, this user has been locked out." |
#         | "usuario_vazio"     | "Epic sadface: Username is required"|
#         | "senha_vazia"       | "Epic sadface: Password is required" |
#         | "usuario_invalido"  | "Epic sadface: Username and password do not match any user in this service" |
#         | "senha_invalida"    | "Epic sadface: Username and password do not match any user in this service" |

# @login_invalido
# Esquema do Cenário: Validação de Login com credenciais inválidas com perfil
#     Quando eu preencho os campos de usuário e senha com as credenciais do usuário <perfil_usuario>
#     E eu clico no botão "LOGIN"
#     Então o sistema deve exibir a mensagem de erro do perfil <perfil_usuario>

#     Exemplos:
#         | perfil_usuario    | 
#         | "locked_out_user"   | 
#         | "usuario_vazio"     | 
#         | "senha_vazia"       | 
#         | "usuario_invalido"  | 
#         | "senha_invalida"    | 