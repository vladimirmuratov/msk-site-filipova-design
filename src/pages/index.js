import Head from 'next/head';
import { MainPageContent } from '@/components/content-page/MainPageContent';


export default function Home() {


    return (
      <>
        <Head>
          <title>Срочная госпитализация в Москве — лечение без ожидания</title>
          <meta
            name="description"
            content="Когда важна каждая минута, мы берём всё на себя: организация госпитализации, подбор врача и контроль лечения. Работаем с регионами и СНГ. Позвоните сейчас."
          />
          <meta
            name="keywords"
            content="госпитализация в москве, платная госпитализация, срочная госпитализация, плановая госпитализация, лечение в москве, госпитализация без омс, лечение без очереди, перевод пациента в москву, медицинский перевод в москву, лечение для иногородних, лечение для граждан снг, федеральные клиники москвы, ведомственные клиники москвы, организация лечения в москве, госпитализация под ключ, тяжелобольные пациенты, лечение сложных случаев, реабилитация в москве, медицинское сопровождение пациента, платная медицина москва"
          />
          <meta property="og:locale" content="ru_RU" />
          <meta
            property="og:title"
            content="Медицинская Сервисная Компания. Платная госпитализация в Москве. Медицинские услуги. Стационар. Без ОМС — быстро, официально, с сопровождением. 8 (499) 719-81-00, круглосуточно"
          />
          <meta
            property="og:description"
            content="Организуем госпитализацию в клиники Москвы без полиса ОМС и направлений. Медицинские услуги. Стационар. Перевод из больниц, помощь тяжёлым пациентам, санитарный транспорт, патронаж. Всё под ключ — без очередей и бюрократии."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://msk-group-hospital.vercel.app" />
          <meta
            property="og:image"
            content="https://msk-group-hospital.vercel.app/images/banner-3.webp"
          />
          <meta
            property="og:image:alt"
            content="Медицинская Сервисная Компания. Платная госпитализация в Москве. Медицинские услуги. Стационар. Без ОМС — быстро, официально, с сопровождением. 8 (499) 719-81-00, круглосуточно"
          />
          <meta property="og:image:type" content="image/webp" />
          <meta
            property="og:site_name"
            content="Медицинская Сервисная Компания. Платная госпитализация в Москве. Медицинские услуги. Стационар. Без ОМС — быстро, официально, с сопровождением. 8 (499) 719-81-00, круглосуточно"
          />

          <link rel="canonical" href="https://msk-group-hospital.vercel.app" />
        </Head>
        <MainPageContent />
      </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
