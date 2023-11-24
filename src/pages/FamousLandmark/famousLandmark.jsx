import React from "react";
import s from "./famousLandmark.module.scss"
const FamousLandmark = () => {
  return (
    <div className={s.container}>
      <h2>Выставочный комплекс Экспо-2017</h2>
      <hr />
      <p>
        Казахстан стал первой страной СНГ, принимавшей Международную
        специализированную выставку. Темой Экспо-2017 стала «Энергия будущего»,
        и на территории Экспо-городка выстроили множество хай-тек объектов и
        павильонов. Самый впечатляющий — гигантская сфера «Нур Алем» высотой 80
        м, которую жители Астаны прозвали «Звездой Смерти». Внутри павильона
        сегодня размещается Музей энергии будущего. Он открыт по пятницам с
        10:00 до 20:00 и по выходным до 21:00, билет стоит 1500 KZT (220 руб).<br />
        Помимо «Нур Алем» для посетителей открыты ещё несколько тематических
        павильонов, в которых теперь магазины и рестораны, Конгресс-центр,
        Арт-центр и Зона лучших практик, где представлены ведущие мировые
        проекты в области возобновляемых источников энергии.
      </p>
    </div>
  );
};

export default FamousLandmark;
