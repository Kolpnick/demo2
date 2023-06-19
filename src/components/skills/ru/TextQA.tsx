import axios from "axios"
import React from "react"
import skillWrapper, { BaseSkillProps } from "../BaseSkill"
import { Res } from "../../../lib/api"
import { CustomLink } from "components/CustomLink/CustomLink"
interface Req {
  text: string
  question: string
}

const config: BaseSkillProps<Req, Res> = {
  title: "Ответы на вопросы по тексту",
  desc: (
    <p>
      Ответы на вопросы по тексту (Text QA) — это задача поиска ответов на
      вопросы в известном контексте (например, в параграфе из Википедии). С
      помощью этого функционала можно искать ответы на вопросы по документации.
      Больше информации о модели и ее применении читайте в
      <CustomLink href="https://docs.deeppavlov.ai/en/master/features/models/SQuAD.html">
        {" "}
        документации
      </CustomLink>
      .
    </p>
  ),
  docker: "deeppavlov/squad_ru",
  inputs: [
    {
      title: "Введите текст",
      type: "textarea",
      name: "text",
    },
    {
      title: "Введите вопрос",
      type: "text",
      name: "question",
    },
  ],
  examples: [
    {
      text: "Одна из наиболее влиятельных групп первой половины 70-х, Kraftwerk, вышедшие из краут-рока, заложили основы всей последующей электронной музыки своими работами, начиная с диска 1974 года Autobahn . Фактически именно Kraftwerk стали переходной ступенью от рок-музыки к новому музыкальному поджанру, в дальнейшем отдалившемуся от собственно рока, однако ставшему огромной частью музыкальной индустрии. Краут-рок в целом (и, в частности, Can и Faust) оказал немалое влияние на развитие альтернативного рока и построка. Влиятельнейшим продюсером краут-рока, разработавшим в какой-то мере его звучание и форму, был Конни Планк.",
      question: "Кто был влиятельнейшим продюсером краут-рока?",
    },
    {
      text: "Глобализация экономики — сложный и противоречивый процесс. С одной стороны, она облегчает хозяйственное взаимодействие между государствами, создаёт условия для доступа стран к передовым достижениям человечества, обеспечивает экономию ресурсов, стимулирует мировой прогресс. С другой, глобализация ведёт к негативным последствиям: закреплению периферийной модели экономики, потере своих ресурсов странами, не входящими в золотой миллиард . Глобализация распространяет конкурентную борьбу на всех участников, в том числе на слабые страны, что приводит к разорению малого бизнеса, снижению уровня жизни населения и др.",
      question: "Что делает глобализация экономики?",
    },
    {
      text: "Галилей по праву считается основателем не только экспериментальной, но — в значительной мере — и теоретической физики. В своём научном методе он осознанно сочетал продуманный эксперимент с его рациональным осмыслением и обобщением, и лично дал впечатляющие примеры таких исследований. Иногда из-за недостатка научных данных Галилей ошибался (например, в вопросах о форме планетных орбит, природе комет или причинах приливов), но в подавляющем большинстве случаев его метод приводил к цели. Характерно, что Кеплер, располагавший более полными и точными данными, чем Галилей, сделал правильные выводы в тех случаях, когда Галилей ошибался.",
      question: "В чём ошибался Галилей?",
    },
    {
      text: "В эпоху перестройки СНГ после обвала СССР, многие испытали шок в связи с переходом экономики на рыночную. Финансовая неграмотность жителей сильно испытывалась в первом десятилетий. Многие договора заключались между собой на основе договора, либо на бумажном носителе, но без оттиска печати нотариуса, который бы утверждал, что нотариус являлся непосредственно свидетелем процесса переговоров и заключения контракта. Такой вид контракта был негативным в силу того, что если вторая сторона договора выполняла свои обязанности не вовремя, либо же отказывалась исполнять, первая сторона не могла это отсудить в суде, ибо сам контракт был заключен неграмотно, с точки зрения законодательной базы.",
      question: "В какой период Россия перешла на рыночную экономику?",
    },
    {
      text: "Услуги по водоснабжению, водоотведению и очистке сточных вод оказывает компания Vodovod-kanalizacija. Основным источником центрального водоснабжения Любляны являются подземные воды Люблянского поля на правом берегу реки Савы в черте города, а также Люблянского барья к югу от Любляны. Для обеззараживания воды иногда применяется хлор. Центральные очистные сооружения, расположенные на северо-восточной окраине города, перерабатывают 80 тыс. м³ вод в сутки. В центре города в тёплый сезон работают питьевые фонтанчики",
      question: "Что порой применяется для обеззараживания вод?",
    },
  ],
  api: async (stateReq: Req) => {
    const req = {
      context_raw: [stateReq.text],
      question_raw: [stateReq.question],
    }
    return await axios.post("https://7005.deeppavlov.ai/model", req)
  },
  renderAnswer: { type: "textqa" },
}

const TexqQA = skillWrapper<Req, Res>("textqaru")
export default function () {
  return <TexqQA {...config} />
}
