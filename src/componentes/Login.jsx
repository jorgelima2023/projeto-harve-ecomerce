import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "../assets/css/login.css";

// componente login buscar um form com validacao bootstrap , 
// forms , validation 

// localstorage adicionar dados usuario no navegador (nome, email, token)
//   token identifica se logado

// usando usestate para guardar email e senha
//    const [email, setEmail] = useState("");
//    const [senha, setSenha] = useState("");
//    useState(false);  validade do formulario
//    hooks useNavigate p/ navegar entre as telas sem precisar tag <a> 
//          let navigate = useNavigate();

// componente gerenciar login, adicionado ao menu 

function Login() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  let navigate = useNavigate();

  function onchangeEmail(event) {
    setEmail(event.target.value);
  }
  function onchangeSenha(event) {
    setSenha(event.target.value);
  }

  function mensagemDeErro(mensagem = "Mensagem de erro") {
    toast.error(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  function mensagemDeSucesso(mensagem = "") {
    toast.success(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  
  async function submitForm(event) {
    event.preventDefault();  // parar o evento do formulario
    setValidated(true);

    const form = new FormData();
    form.append("email", email);    // adicionando dados form que vem do useState
    form.append("password", senha); // adicionando dados form que vem do useState
    const options = {               
      method: "POST",               // configuracao da requisicao
      mode: "cors",
      body: form,
    };

    // mensagemDeSucesso, mensagemDeErro criando a funcao para dar alert
    // utl da api com endpoint utilizado
    try {
      const response = await fetch(
        "https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
        options
      );
      mensagemDeSucesso("Logado com sucesso");
      const data = await response.json();    // variavel data recebe os dados da api
      const token = data.token
      const nomeUsuario = data.user.name
      const emailUsario = data.user.email

      // localstorage salvar dados que vem da api no endpoint de login atraves set
      localStorage.setItem('token', token)
      localStorage.setItem('nomeUsuario', nomeUsuario)
      localStorage.setItem('emailUsario', emailUsario)

      navigate("/");  // chamar pagina principal HOME, sucesso login usando useNavigate
    } catch (error) {
      mensagemDeErro("Não foi possivel realizar login");
    }
  }

  return (
    //  bootstrap , login.css , image src... form 
    //   onChange={onchangeEmail} usando a funcao que manipula o email
    //   onChange={onchangeSenha} usando a funcao que manipula a senha
    //   <Button type="submit" size="lg">  botao que gera o submit do form
    //   <Form noValidate validated={validated} onSubmit={submitForm}> usando onSubmit form envia dados
    //   async function  fazendo a requisicao na api para fazer login usando fetch
    <Container>
      <Row style={{ marginTop: "13%" }}>
        <Col md={1}></Col>
        <Col md={10}>
          <Row>
            <Col md={6} style={{ padding: "0%" }}>
              <Image
                src="https://apa.az/storage/news/2023/march/09/big/6409d74615a996409d74615a9a16783665346409d74615a926409d74615a93.jpg"
                width="100%"
                height="100%"
              />
            </Col>
            <Col md={6} className="box">
              <h1 className="text-center">E-COMMERCE HARVE</h1>
              <Form noValidate validated={validated} onSubmit={submitForm}>
                <Row style={{ margin: "7%" }}>
                  <Col>
                    <Form.Group controlId="validationEmail">
                      <Form.Label>E-mail</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputEmail">@</InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="E-mail"
                          aria-describedby="inputEmail"
                          required
                          onChange={onchangeEmail}
                        />
                        <Form.Control.Feedback type="invalid">
                          Adicionar um email valido.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <Row style={{ margin: "7%" }}>
                  <Col>
                    <Form.Group controlId="validationCustomUsername">
                      <Form.Label>Senha</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputSenha">*</InputGroup.Text>
                        <Form.Control
                          type="password"
                          placeholder="Senha"
                          aria-describedby="inputSenha"
                          required
                          onChange={onchangeSenha}
                        />
                        <Form.Control.Feedback type="invalid">
                          Senha é obrigatorio.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <Row style={{ margin: "7%" }}>
                  <Col className="d-grid gap-2">
                    <Button type="submit" size="lg">
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export { Login };