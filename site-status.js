'use strict';
// Independent of catalogue data: even a failed data/script download must not leave loading forever.
(() => {
 function showFailure(){
  if(document.documentElement.dataset.appReady==='true')return;
  const status=document.getElementById('result-count');
  if(status)status.textContent='Catálogo indisponível neste momento.';
  const box=document.getElementById('catalogue-error');if(box)box.hidden=false;
  const submit=document.getElementById('enquiry-submit'),formStatus=document.getElementById('form-result');
  if(submit?.disabled&&formStatus){formStatus.hidden=false;formStatus.textContent='O formulário não iniciou. Utilize os contactos directos de WhatsApp ou e-mail acima.';}
 }
 window.addEventListener('error',event=>{
  if(event.target?.tagName==='SCRIPT'||/script\.js|fees-data\.js/.test(event.filename||''))showFailure();
 },true);
 window.addEventListener('load',()=>{if(document.documentElement.dataset.appReady!=='true')showFailure();});
 setTimeout(showFailure,12000);
  window.addEventListener('load',()=>{
   const hero=document.getElementById('hero-image');
   if(hero){hero.src='assets/parul-brochure-cover.jpg';hero.alt='Capa da brochura oficial da Parul University 2026–27';}
   document.querySelectorAll('a').forEach(a=>{if(a.textContent.toLowerCase().includes('elizabeth'))a.remove();});
   document.querySelector('#enquiry option[value="elizabeth"]')?.remove();
   const brochure=document.createElement('a');brochure.className='button outline brochure-cta';brochure.href='assets/parul-usd-brochure-2026-27.pdf';brochure.target='_blank';brochure.rel='noopener';brochure.textContent='Ver brochura oficial da Parul University ↗';
   const university=document.getElementById('university');if(university&&!university.querySelector('.brochure-cta'))university.querySelector('.section-heading')?.append(brochure);
   const costText=document.querySelector('#costs .cost-explainer dd:last-of-type');if(costText)costText.textContent='Todos os valores apresentados nesta página estão em USD, tal como publicados na brochura. Não fazemos conversões. Preços futuros podem mudar; confirme o valor aplicável à sua candidatura com a ADA e a universidade.';
   const explainer=document.querySelector('#costs .cost-explainer');
   if(explainer)explainer.innerHTML='<div class="cost-gallery"><figure class="cost-gallery-main"><img src="assets/parul-campus-gate.jpg" width="993" height="430" loading="lazy" alt="Entrada da Parul University apresentada na brochura oficial"><figcaption>O campus Parul University, em Vadodara</figcaption></figure><div class="cost-gallery-pair"><figure><img src="assets/parul-brochure-cover.jpg" width="993" height="1404" loading="lazy" alt="Estudantes junto à entrada da Parul University"><figcaption>Um ambiente internacional</figcaption></figure><figure><img src="assets/parul-student-study.jpg" width="993" height="635" loading="lazy" alt="Estudante a estudar, fotografia da brochura oficial"><figcaption>Prepare o seu próximo passo</figcaption></figure></div></div><div class="cost-visual-copy"><p class="eyebrow">VALORES OFICIAIS EM USD</p><h3>Escolha o seu caminho.<br><em>Planeie com clareza.</em></h3><p>Veja o campus, consulte a brochura oficial e use a calculadora ao lado para comparar apenas propinas e hostéis publicados. Para qualquer informação não confirmada, fale com a ADA.</p><a class="inline" href="assets/parul-usd-brochure-2026-27.pdf#page=5" target="_blank" rel="noopener">Abrir brochura oficial 2026–27 ↗</a><p class="source-note">Imagens: brochura oficial Parul University fornecida à ADA. Propinas, disponibilidade, documentos, viagens, voos e vistos devem ser confirmados antes de qualquer decisão.</p></div>';
   document.querySelectorAll('.course-card .fee-line').forEach(el=>{if(el.textContent.includes('não confirmada'))el.innerHTML='Preço a confirmar com a ADA <a class="fee-help" href="#contact">Pedir confirmação ↗</a>';});
   const travel=document.querySelector('#international .checklist>p');if(travel)travel.innerHTML='Esta lista é orientativa. Para documentos, viagem, voo, visto, seguro ou chegada, fale directamente com a ADA antes de tomar decisões. A decisão sobre o visto cabe às autoridades competentes.';
  });
})();
