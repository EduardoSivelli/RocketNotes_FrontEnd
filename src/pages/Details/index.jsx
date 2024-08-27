import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Container, Links, Content } from "./styles"

export function Details(){
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1> Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, possimus asperiores. 
            Excepturi, incidunt possimus et quis ullam eligendi impedit praesentium commodi dicta tempora facilis ad adipisci animi obcaecati numquam architecto?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.notion.so/M-dulo-9-Frontend-b301a93728e94373adf8dae4b430737d</a>
              </li>
              <li>
                <a href="#">https://app.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"/>
            <Tag title="Node"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}