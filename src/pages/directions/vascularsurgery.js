import { Box, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';

export default function Vascularsurgery() {
  return (
    <Box>
      <BaseBanner imgPath="/images/directions/10.webp" title="Сосудистая хирургия" />

      <Box
        sx={{
          paddingY: { xs: '25px', sm: '50px' },
          marginX: { xs: '15px', lg: 0 },
        }}
      >
        <Typography
          sx={{
            color: 'var(--blue)',
            fontSize: { xs: 14, sm: 16 },
            fontWeight: 400,
          }}
        >
          Сосудистая хирургия играет ключевую роль в современной медицине, особенно в контексте
          профилактики и лечения заболеваний, связанных с кровеносными сосудами. Эти заболевания,
          включая атеросклероз, тромбоз, варикозное расширение вен и аневризмы, могут приводить к
          серьезным последствиям, таким как инфаркты, инсульты и ампутации конечностей.
          <br />
          Значение сосудистой хирургии трудно переоценить, так как она позволяет устранять или
          минимизировать риски, связанные с нарушениями кровообращения. Специалисты в этой области
          используют современные технологии и методы, такие как ангиопластика, стентирование и
          шунтирование, чтобы восстанавливать проходимость сосудов, улучшать кровоснабжение органов
          и тканей, а также предотвращать развитие осложнений.
          <br />
          Раннее выявление и своевременное хирургическое вмешательство могут значительно повысить
          качество жизни пациентов, уменьшить болевые синдромы, сохранить подвижность и
          предотвратить инвалидизацию. В условиях стареющего населения сосудистая хирургия
          становится все более востребованной, поскольку с возрастом риск сосудистых заболеваний
          существенно возрастает.
          <br />
          Таким образом, сосудистая хирургия не только спасает жизни, но и помогает людям сохранять
          здоровье и активный образ жизни, несмотря на возраст и сопутствующие заболевания.
        </Typography>
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
