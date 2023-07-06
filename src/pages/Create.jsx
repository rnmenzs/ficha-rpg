import React from "react"; 
import NavBar from "../components/NavBar";
import "../styles/create.css";
import Fields from "../components/Fields";
import Attributes from "../components/AttributesFields";
import ResTes from "../components/ResTes";
import ThreeFields from "../components/ThreeFields";
import Description from "../components/Description";
import ImageApperance from "../components/ImageApperance";

export default function Create() {
  return (
    <>
      <NavBar />
      <div className="container-1">
        <div className="content-info">
          <div className="content-info-name">
            <Fields
              _class="content-info-field"
              inputType="text"
              inputName="charName"
              inputId="charName"
            >
              Nome do Personagem
            </Fields>
          </div>
          <div className="content-info-others">
            <Fields
              _class="content-info-field-others"
              inputType="text"
              inputName="class"
              inputId="class"
            >
              Classe &amp; Nível
            </Fields>
            <Fields
              _class="content-info-field-others"
              inputType="text"
              inputName="antecedentes"
              inputId="antecedentes"
            >
              Antecedentes
            </Fields>
            <Fields
              _class="content-info-field-others"
              inputType="text"
              inputName="player"
              inputId="player"
            >
              Nome do Jogador
            </Fields>
            <Fields
              _class="content-info-field-others"
              inputType="text"
              inputName="raca"
              inputId="raca"
            >
              Raça
            </Fields>
            <Fields
              _class="content-info-field-others"
              inputType="text"
              inputName="tendencia"
              inputId="tendencia"
            >
              Tendência
            </Fields>
            <Fields
              _class="content-info-field-others"
              inputType="text"
              inputName="xp"
              inputId="xp"
            >
              Experiência
            </Fields>
          </div>
        </div>
        <div className="content-details">
          <div className="column-1">
            <Attributes
              _class="details-attributes"
              _classInputAttribute="attribute-input"
              _classInputBonus="attribute-bonus"
              inputType="number"
              inputName="attrStrength"
              inputNameBonus="bonusStrength"
              inputId="attrStrength"
              inputIdBonus="bonusStrength"
            >
              Força
            </Attributes>
            <Attributes
              _class="details-attributes"
              _classInputAttribute="attribute-input"
              _classInputBonus="attribute-bonus"
              inputType="number"
              inputName="attrStrength"
              inputNameBonus="bonusStrength"
              inputId="attrStrength"
              inputIdBonus="bonusStrength"
            >
              Destreza
            </Attributes>
            <Attributes
              _class="details-attributes"
              _classInputAttribute="attribute-input"
              _classInputBonus="attribute-bonus"
              inputType="number"
              inputName="attrStrength"
              inputNameBonus="bonusStrength"
              inputId="attrStrength"
              inputIdBonus="bonusStrength"
            >
              Constituição
            </Attributes>
            <Attributes
              _class="details-attributes"
              _classInputAttribute="attribute-input"
              _classInputBonus="attribute-bonus"
              inputType="number"
              inputName="attrStrength"
              inputNameBonus="bonusStrength"
              inputId="attrStrength"
              inputIdBonus="bonusStrength"
            >
              Inteligência
            </Attributes>
            <Attributes
              _class="details-attributes"
              _classInputAttribute="attribute-input"
              _classInputBonus="attribute-bonus"
              inputType="number"
              inputName="attrStrength"
              inputNameBonus="bonusStrength"
              inputId="attrStrength"
              inputIdBonus="bonusStrength"
            >
              Sabedoria
            </Attributes>
            <Attributes
              _class="details-attributes"
              _classInputAttribute="attribute-input"
              _classInputBonus="attribute-bonus"
              inputType="number"
              inputName="attrStrength"
              inputNameBonus="bonusStrength"
              inputId="attrStrength"
              inputIdBonus="bonusStrength"
            >
              Carisma
            </Attributes>
          </div>
          <div className="column-2">
            <Fields
              _class="inspiration"
              inputType="number"
              inputName="inspiration"
              inputId="inspiration"
            >
              Inspiração
            </Fields>
            <Fields
              _class="profBonus"
              inputType="number"
              inputName="profBonus"
              inputId="profBonus"
            >
              Bônus de Proficiência
            </Fields>
            <div className="content-res-tes">
              <ResTes _class="teste-res">Força</ResTes>
              <ResTes _class="teste-res">Destreza</ResTes>
              <ResTes _class="teste-res">Constituição</ResTes>
              <ResTes _class="teste-res">Inteligência</ResTes>
              <ResTes _class="teste-res">Sabedoria</ResTes>
              <ResTes _class="teste-res">Carisma</ResTes>
              <p>Testes de Resistência</p>
            </div>
            <div className="content-pericias">
              <ResTes _class="teste-res">Força</ResTes>
              <ResTes _class="teste-res">Destreza</ResTes>
              <ResTes _class="teste-res">Constituição</ResTes>
              <ResTes _class="teste-res">Inteligência</ResTes>
              <ResTes _class="teste-res">Sabedoria</ResTes>
              <ResTes _class="teste-res">Carisma</ResTes>
              <ResTes _class="teste-res">Força</ResTes>
              <ResTes _class="teste-res">Destreza</ResTes>
              <ResTes _class="teste-res">Constituição</ResTes>
              <ResTes _class="teste-res">Inteligência</ResTes>
              <ResTes _class="teste-res">Sabedoria</ResTes>
              <ResTes _class="teste-res">Carisma</ResTes>
              <ResTes _class="teste-res">Força</ResTes>
              <ResTes _class="teste-res">Destreza</ResTes>
              <ResTes _class="teste-res">Constituição</ResTes>
              <ResTes _class="teste-res">Inteligência</ResTes>
              <ResTes _class="teste-res">Sabedoria</ResTes>
              <ResTes _class="teste-res">Carisma</ResTes>
              <p>Perícias</p>
            </div>
          </div>
          <div className="column-3">
            <div className="status">
              <Fields _class="status-component">
                <br />
                Classe de Armadura
              </Fields>
              <Fields _class="status-component">
                <br />
                Iniciativa
              </Fields>
              <Fields _class="status-component">
                <br />
                Deslocamento
              </Fields>
            </div>
            <div className="pv-content">
              <Fields _class="max-pv">Pontos de Vida Máximo</Fields>
              <Fields _class="current-pv">Pontos de Vida Atual</Fields>
            </div>
            <div className="temp-pv-content">
              <Fields _class="temp-pv">Pontos de Vida Temporários</Fields>
            </div>
            <div className="dice-pv-content">
              <Fields _class="dice-pv">Dados de Vida</Fields>
            </div>
            <div className="attack-spells-content">
              <div className="attacks-details">
                <label htmlFor="">Nome</label>
                <label htmlFor="">Nome</label>
                <label htmlFor="">Nome</label>
                <ThreeFields _classInput1="attack-input-1" _classInput2="attack-input-2"></ThreeFields>
                <ThreeFields _classInput1="attack-input-1" _classInput2="attack-input-2"></ThreeFields>
                <ThreeFields _classInput1="attack-input-1" _classInput2="attack-input-2"></ThreeFields>
              </div>
              <div className="attack-description-content">
                <Description _class="attack-description">Ataques e Magias</Description>
              </div>
            </div>
            <div className="armorum-content">
              <Description _class="armorum-description">Equipamentos</Description>
            </div>
            
          </div>
          <div className="column-4">
            <Description _class="char-description" _id="personality">Traços de Personal</Description>
            <Description _class="char-description">Ideais</Description>
            <Description _class="char-description">Vínculos</Description>
            <Description _class="char-description" _id="weakness">Fraquezas</Description>
            <Description _class="char-carac">Características e Traços</Description>
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="char-content">
          <div className="char-apperance">
            <ImageApperance _class="image-apperance">Aparência do Personagem</ImageApperance>
            <div className="char-apperance-details">
              <Fields _class="carac-fields">Idade</Fields>
              <Fields _class="carac-fields">Altura</Fields>
              <Fields _class="carac-fields">Peso</Fields>
              <Fields _class="carac-fields">Olhos</Fields>
              <Fields _class="carac-fields">Pele</Fields>
              <Fields _class="carac-fields">Cabelos</Fields>
            </div>
          </div>
          <div>
            <Description _class="carac-text">História do Personagem</Description>
            <Description _class="carac-text">Tesouro</Description>
          </div>
        </div>
      </div>
    </>
  );
}
