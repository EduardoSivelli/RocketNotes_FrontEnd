import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";
import {TextArea} from "../../components/TextArea";
import {Button} from "../../components/Button";
import {NoteItem} from "../../components/NoteItem";
import {Section} from "../../components/Section";


export function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />
          <TextArea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem isNew placeholder="Novo Link"/>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react"/>
              <NoteItem isNew placeholder="Nova tag"/>
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}