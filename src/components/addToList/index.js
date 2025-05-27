import { CiCirclePlus } from "react-icons/ci";
import * as S from "./styles.js"

function AddToList() {
    return (
        <S.Form>

            <S.Input placeholder="Adicionar uma nova tarefa" />
            <S.Button>Criar <CiCirclePlus size={30} /></S.Button>
        </S.Form>
    )
}

export { AddToList }