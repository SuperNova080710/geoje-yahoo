/* Coordinates are itinerary overview points. Use each map-search link for exact navigation. */
const hotel = [34.84343, 128.70304];
const places = {
  jeonbokdo:{name:'전복도',coords:[34.8429,128.7018],query:'전복도 소노캄거제본점 경남 거제시 일운면 소동6길 17-2'},
  gujora:{name:'구조라해수욕장',coords:[34.807949,128.692205]},
  kart:{name:'거제 오션뷰카트체험장',coords:[34.792,128.674],query:'거제 오션뷰카트체험장 거제대로 1514-18'},
  glassis:{name:'글래씨스',coords:[34.7923,128.6738],query:'글래씨스 거제대로 1514-17'},
  hotel:{name:'소노캄 거제',coords:hotel,query:'소노캄 거제 거제대로 2660'},
  ferry:{name:'도장포 선착장',coords:[34.743,128.661],query:'도장포유람선 도장포1길 55'},
  oedo:{name:'외도 보타니아',coords:[34.76927,128.71192]},
  wind:{name:'바람의 언덕',coords:[34.744,128.664]},
  sinseondae:{name:'신선대',coords:[34.738,128.652],query:'거제 신선대'},
  atv:{name:'와현레저 ATV',coords:[34.817,128.703],query:'와현레저 ATV 거제 와현리 546'},
  rowa:{name:'지세포로와',coords:[34.836,128.705],query:'지세포로와 지세포해안로 194'},
  cable:{name:'거제 파노라마 케이블카',coords:[34.78576,128.63293],query:'거제 파노라마 케이블카 거제중앙로 288'},
  luge:{name:'통영 스카이라인 루지',coords:[34.827,128.433],query:'통영 스카이라인 루지'}
};
// Restaurant coordinates are approximate area anchors until the group confirms each business.
// The popup always provides a named map search for accurate navigation.
const foodPlaces={
  '꽃숯갈비':{name:'꽃숯갈비',coords:[34.84,128.699],query:'꽃숯갈비 거제 일운면'},
  '쑝쑝돈까스 거제 지세포점':{name:'쑝쑝돈까스 거제 지세포점',coords:[34.834,128.697],query:'쑝쑝돈까스 거제 지세포점'},
  '돈탐라 지세포점':{name:'돈탐라 지세포점',coords:[34.835,128.698],query:'돈탐라 지세포점 지세포로 73'},
  '불멍캠핑가든 소노캄 지세포 본점':{name:'불멍캠핑가든 소노캄 지세포 본점',coords:[34.846,128.697],query:'불멍캠핑가든 소노캄 지세포 본점 소동7길 52'},
  'A212 글램핑 바베큐':{name:'A212 글램핑 바베큐',coords:[34.799,128.682],query:'A212 글램핑 바베큐 거제대로 1826'},
  'BBQ Factory 소노캄 거제':{name:'BBQ Factory 소노캄 거제',coords:hotel,query:'BBQ Factory 소노캄 거제',official:'https://www.sonohotelsresorts.com/calm_gj/restaurant/detail/DIN00000416'},
  '키친루셀로':{name:'키친루셀로',coords:[34.801,128.685],query:'키친루셀로 거제'},
  '함목 중화요리':{name:'함목 중화요리',coords:[34.742,128.654],query:'함목 중화요리 거제 해금강로 12'},
  '오닐':{name:'오닐',coords:[34.802,128.684],query:'오닐 거제 거제대로 1982'},
  '거제도 핫도그 본점':{name:'거제도 핫도그 본점',coords:[34.744,128.663],query:'거제도 핫도그 본점'},
  '통영루지 김치쌈':{name:'통영루지 김치쌈',coords:[34.827,128.435],query:'통영루지 김치쌈 데메3길 27-44'},
  '스탠포드호텔 카페스탠포드':{name:'스탠포드호텔 카페스탠포드',coords:[34.817,128.43],query:'스탠포드호텔 카페스탠포드 통영'},
  '브라운핸즈 파노라마거제':{name:'브라운핸즈 파노라마거제',coords:[34.784,128.638],query:'브라운핸즈 파노라마거제'},
  '투썸플레이스 통영루지점':{name:'투썸플레이스 통영루지점',coords:[34.827,128.433],query:'투썸플레이스 통영루지점'},
  '커피홀베이커리 통영도남점':{name:'커피홀베이커리 통영도남점',coords:[34.817,128.43],query:'커피홀베이커리 통영도남점'},
  '몬테로쏘 베이커리&음료':{name:'몬테로쏘 베이커리&음료',coords:hotel,query:'몬테로쏘 소노캄 거제'}
};
const days = {
  1:{date:'SATURDAY · NOV 21',title:'거제에 닿는 날',description:'바다를 만나고, 카트를 타고, 노을빛 카페에 머무는 하루.',stops:[
    {id:'jeonbokdo',detail:'점심 · 첫 식사부터 바다 가까이'},
    {id:'gujora',detail:'해변 산책 · 함께 남기는 첫 사진'},
    {id:'kart',detail:'카트 체험 · 바닷바람을 가르며'},
    {id:'glassis',detail:'오션뷰 카페 · 잠시 쉬어가기'},
    {id:'hotel',detail:'체크인 · 소노캄 거제에서 2박'}
  ],groups:[
    {label:'점심 · 전복도와 대안',items:[['전복도','전복·한식 · 방문 예정','jeonbokdo'],['꽃숯갈비','돼지갈비 · 고기 대안',null],['쑝쑝돈까스 거제 지세포점','돈가스 · 해산물 비선호자 대안',null]]},
    {label:'저녁 · 소노캄 / 지세포',items:[['돈탐라 지세포점','제주 흑돼지 · 1순위',null],['꽃숯갈비','숯불구이 · 단체 식사',null],['몬테로쏘','피자·스테이크 · 숙소 내부','hotel'],['키친루셀로','이탈리안 · 구조라 방향',null]]},
    {label:'카페',items:[['글래씨스','대형 오션뷰 베이커리','glassis'],['몬테로쏘 베이커리&음료','숙소 안에서 쉬기','hotel']]}
  ]},
  2:{date:'SUNDAY · NOV 22',title:'섬과 바람을 따라',description:'외도의 정원에서 남쪽 해안으로, 그리고 와현의 오프로드까지.',stops:[
    {id:'hotel',detail:'아침 · 여유롭게 출발'},
    {id:'ferry',detail:'외도·해금강 유람선 · 출항 시간 예약'},
    {id:'oedo',detail:'외도 상륙 · 유람선 왕복 코스'},
    {id:'wind',detail:'풍차와 바다 · 도장포에서 짧은 산책'},
    {id:'sinseondae',detail:'시간이 넉넉하다면 들르기',optional:true},
    {id:'atv',detail:'오프로드 ATV · 체험 시간 예약'},
    {id:'rowa',detail:'오션뷰 카페 · 쉬어가는 시간'},
    {id:'hotel',detail:'숯불 바비큐 저녁 후 숙소로'}
  ],groups:[
    {label:'점심 · 도장포에서 와현으로',items:[['함목 중화요리','짜장면·탕수육 · 도장포 인근',null],['오닐','수제 돈가스 · 북상하는 길',null],['거제도 핫도그 본점','시간이 부족할 때 간식',null]]},
    {label:'저녁 · 숯불에 직접 굽는 바비큐',items:[['불멍캠핑가든 소노캄 지세포 본점','개별 방갈로 · 숯불구이 · 숙소 인근',null],['A212 글램핑 바베큐','글램핑 방갈로 · 숯 제공 · 직접 굽기',null]]},
    {label:'숙소 내 셀프 BBQ · 연료 확인',items:[['BBQ Factory 소노캄 거제','EAST 야외 · 숯불/연탄 후기 상이, 예약 전 확인',null]]},
    {label:'카페',items:[['지세포로와','오션뷰 베이커리','rowa'],['몬테로쏘 베이커리&음료','숙소 안에서 쉬기','hotel']]}
  ]},
  3:{date:'MONDAY · NOV 23',title:'높이 올라, 더 멀리',description:'노자산 위의 풍경을 담고 통영 루지로 마지막 장면을 장식해요.',stops:[
    {id:'hotel',detail:'체크아웃 · 마지막 아침'},
    {id:'cable',detail:'거제 파노라마 케이블카 · 전망대'},
    {id:'luge',detail:'통영 스카이라인 루지 · 3회 탑승 예정'}
  ],groups:[
    {label:'점심 · 케이블카 / 통영',items:[['바다한상','한식·돈가스 · 케이블카 건물','cable'],['통영루지 김치쌈','찌개·삼겹살 · 루지 인근','luge'],['스탠포드호텔 카페스탠포드','양식·한식 · 통영 도남동',null]]},
    {label:'카페 · 돌아가기 전',items:[['브라운핸즈 파노라마거제','케이블카 상부 전망대','cable'],['투썸플레이스 통영루지점','루지 주변 휴식','luge'],['커피홀베이커리 통영도남점','커피·베이커리',null]]}
  ]}
};

const $=s=>document.querySelector(s);
const locations={
  jeonbokdo:'경남 거제시 일운면 소동6길 17-2, 2층',gujora:'경남 거제시 일운면 구조라리',kart:'경남 거제시 일운면 거제대로 1514-18',glassis:'경남 거제시 일운면 거제대로 1514-17',hotel:'경남 거제시 일운면 거제대로 2660',ferry:'경남 거제시 남부면 도장포1길 55',oedo:'경남 거제시 일운면 외도 일대',wind:'경남 거제시 남부면 갈곶리',sinseondae:'경남 거제시 남부면 갈곶리',atv:'경남 거제시 일운면 와현리 546',rowa:'경남 거제시 일운면 지세포해안로 194',cable:'경남 거제시 동부면 거제중앙로 288',luge:'경남 통영시 도남동 일대'
};
const foodLocations={'불멍캠핑가든 소노캄 지세포 본점':'경남 거제시 일운면 소동7길 52','A212 글램핑 바베큐':'경남 거제시 일운면 거제대로 1826, 1층','BBQ Factory 소노캄 거제':'경남 거제시 일운면 거제대로 2660, EAST 지하 1층 야외','돈탐라 지세포점':'경남 거제시 일운면 지세포로 73','함목 중화요리':'경남 거제시 남부면 해금강로 12','오닐':'경남 거제시 일운면 거제대로 1982','통영루지 김치쌈':'경남 통영시 데메3길 27-44','바다한상':'경남 거제시 동부면 거제중앙로 288, 2층'};
const state={day:1,selected:null,map:null,markers:[],lines:[],bounds:null,foodMarker:null};
const mapLink=place=>`https://map.naver.com/p/search/${encodeURIComponent(typeof place==='string'?place:(place.query||place.name))}`;
function showToast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove('show'),2800)}
function pinIcon(label,food=false,selected=false){return L.divIcon({className:'',html:`<span class="pin ${food?'food':''} ${selected?'selected':''}">${label}</span>`,iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-20]})}
function popupHtml(name,place,label){return `<span class="popup-label">${label}</span><div class="popup-title">${name}</div><a class="popup-link" href="${mapLink(place)}" target="_blank" rel="noopener noreferrer">네이버 지도에서 확인 ↗</a>`}
function focusPlace(place,index,kind='stop'){
  state.selected=`${kind}-${index}`;
  document.querySelectorAll('.stop-item,.food-item').forEach(el=>el.classList.toggle('is-selected',el.dataset.focus===state.selected));
  if(!state.map){window.open(mapLink(place),'_blank','noopener,noreferrer');return}
  if(matchMedia('(max-width: 849px)').matches)$('#mapSection').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
  state.map.flyTo(place.coords,Math.max(state.map.getZoom(),12),{duration:.75});
  state.markers.forEach(({marker,key})=>marker.getElement()?.querySelector('.pin')?.classList.toggle('selected',key===state.selected));
  if(state.foodMarker){state.map.removeLayer(state.foodMarker);state.foodMarker=null}
  const hit=state.markers.find(m=>m.key===state.selected);
  if(hit)hit.marker.openPopup();else if(kind==='food')state.foodMarker=L.marker(place.coords,{icon:pinIcon('✦',true,true)}).addTo(state.map).bindPopup(popupHtml(place.name,place,'식당 / 카페 · 대략 위치')).openPopup();
}
function initMap(){
  if(!window.L){$('#mapFallback').hidden=false;return}
  state.map=L.map('map',{zoomControl:true,scrollWheelZoom:false,zoomSnap:.25});
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'}).addTo(state.map);
  state.map.on('tileerror',()=>{if(!state.map._geojeTileLoaded)$('#mapFallback').hidden=false});
  state.map.on('tileload',()=>{state.map._geojeTileLoaded=true;$('#mapFallback').hidden=true});renderMap();
}
function fitMap(animate=true){if(state.map&&state.bounds)state.map.fitBounds(state.bounds.pad(.1),{padding:[25,25],maxZoom:13,animate,duration:.6})}
function renderMap(){
  if(!state.map)return;
  state.markers.forEach(({marker})=>state.map.removeLayer(marker));state.markers=[];
  state.lines.forEach(line=>state.map.removeLayer(line));state.lines=[];
  if(state.foodMarker){state.map.removeLayer(state.foodMarker);state.foodMarker=null}
  const day=days[state.day],coords=day.stops.filter(s=>!s.optional).map(s=>places[s.id].coords);
  state.lines.push(L.polyline(coords,{color:'#fff7e9',weight:7,opacity:.9,interactive:false}).addTo(state.map));
  state.lines.push(L.polyline(coords,{color:'#a65a3f',weight:3,opacity:1,dashArray:'4 7',className:'route-dash',interactive:false}).addTo(state.map));
  day.stops.forEach((stop,i)=>{const place=places[stop.id],key=`stop-${i}`;const marker=L.marker(place.coords,{icon:pinIcon(String(i+1).padStart(2,'0'))}).addTo(state.map).bindPopup(popupHtml(place.name,place,`DAY ${state.day} · ${String(i+1).padStart(2,'0')}`));marker.on('click',()=>{state.selected=key;document.querySelectorAll('.stop-item,.food-item').forEach(el=>el.classList.toggle('is-selected',el.dataset.focus===key));state.markers.forEach(({marker:m,key:k})=>m.getElement()?.querySelector('.pin')?.classList.toggle('selected',k===key))});state.markers.push({marker,key})});
  state.bounds=L.latLngBounds(day.stops.map(s=>places[s.id].coords));fitMap(false);setTimeout(()=>state.map.invalidateSize(),50);
}
function placeLinks(place,address){const row=document.createElement('div');row.className='place-links';const location=document.createElement('span');location.className='place-address';location.textContent=address||'상세 주소는 지도에서 확인';const link=document.createElement('a');link.href=mapLink(place);link.target='_blank';link.rel='noopener noreferrer';link.textContent='네이버 지도 · 메뉴/위치 ↗';link.setAttribute('aria-label',`${place.name} 네이버 지도에서 메뉴와 위치 확인`);row.append(location,link);if(place.official){const official=document.createElement('a');official.href=place.official;official.target='_blank';official.rel='noopener noreferrer';official.textContent='공식 운영 안내 ↗';row.append(official)}return row}
function renderDay(day){
  state.day=day;state.selected=null;const data=days[day];
  document.querySelectorAll('.day-tab').forEach(tab=>{const active=Number(tab.dataset.day)===day;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1});
  $('#day-panel').setAttribute('aria-labelledby',`tab-${day}`);$('#dayDate').textContent=data.date;$('#dayTitle').textContent=data.title;$('#dayDescription').textContent=data.description;$('#dayNumber').textContent=String(day).padStart(2,'0');$('#stopCount').textContent=`${data.stops.length}곳`;
  $('#stopList').replaceChildren(...data.stops.map((stop,i)=>{const place=places[stop.id],li=document.createElement('li');li.className='stop-item';li.dataset.focus=`stop-${i}`;const button=document.createElement('button');button.type='button';button.className='place-button';button.setAttribute('aria-label',`${i+1}번째 ${place.name} 지도에서 강조`);button.innerHTML=`<span class="stop-badge">${String(i+1).padStart(2,'0')}</span><span class="place-copy"><strong>${place.name}${stop.optional?'<span class="optional-tag">선택</span>':''}</strong><small>${stop.detail}</small></span><span class="arrow" aria-hidden="true">⌖</span>`;button.onclick=()=>focusPlace(place,i);li.append(button,placeLinks(place,locations[stop.id]));return li}));
  let foodIndex=0;$('#foodGroups').replaceChildren(...data.groups.map(group=>{const section=document.createElement('section');section.className='food-group';const heading=document.createElement('h5');heading.textContent=group.label;section.append(heading);group.items.forEach(([name,desc,placeId])=>{const index=foodIndex++,basePlace=placeId?places[placeId]:foodPlaces[name],place={...basePlace,name,query:foodLocations[name]?`${name} ${foodLocations[name]}`:placeId?`${name} ${locations[placeId]||''}`:basePlace.query||name},row=document.createElement('div');row.className='food-place';const button=document.createElement('button');button.type='button';button.className='food-item';button.dataset.focus=`food-${index}`;button.innerHTML=`<span class="food-bullet"></span><span class="food-copy"><strong>${name}</strong><small>${desc}</small></span><span class="arrow" aria-hidden="true">⌖</span>`;button.setAttribute('aria-label',`${name} 지도에서 강조`);button.onclick=()=>focusPlace(place,index,'food');row.append(button,placeLinks({...place,name,query:placeId?`${name} ${locations[placeId]||''}`:place.query||name},foodLocations[name]||(placeId?locations[placeId]:null)));section.append(row)});return section}));
  renderMap();history.replaceState(null,'',`#day-${day}`);setupReveal();
}
function setupTabs(){document.querySelectorAll('.day-tab').forEach(tab=>{tab.onclick=()=>renderDay(Number(tab.dataset.day));tab.onkeydown=e=>{const tabs=[...document.querySelectorAll('.day-tab')],i=tabs.indexOf(tab);if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const next=tabs[(i+(e.key==='ArrowRight'?1:2))%3];next.focus();renderDay(Number(next.dataset.day))}}});$('#fitMap').onclick=()=>fitMap()}
function setupReveal(){if(!('IntersectionObserver'in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.06});document.querySelectorAll('.map-card,.panel,.food-group,.travel-notes').forEach(el=>{el.classList.add('reveal');observer.observe(el)})}
async function share(){const url=new URL(location.href);url.hash=`day-${state.day}`;try{if(navigator.share){await navigator.share({title:'거제 여행 · 11월의 사흘',url:url.href});return}await navigator.clipboard.writeText(url.href);showToast('여행 링크를 복사했습니다')}catch(e){if(e.name!=='AbortError')showToast('주소창의 링크를 복사해 주세요')}}
function setupHeroLines(){const canvas=$('#heroLines'),ctx=canvas.getContext('2d');if(!ctx)return;let w,h,dpr,frame=0;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;function resize(){dpr=Math.min(devicePixelRatio||1,2);w=canvas.clientWidth;h=canvas.clientHeight;canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);draw()}function draw(){ctx.clearRect(0,0,w,h);for(let row=0;row<17;row++){ctx.beginPath();for(let col=0;col<=75;col++){const x=w*.66+(col-37)*13,y=h*.53+(row-8)*16+Math.sin(col*.13+row*.33+frame*.012)*12+Math.cos(col*.06-row*.5+frame*.008)*17;if(col===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)}ctx.strokeStyle=`rgba(234,179,115,${.055+row*.011})`;ctx.lineWidth=.8;ctx.stroke()}}function tick(){if(document.visibilityState==='visible'){frame++;draw()}requestAnimationFrame(tick)}addEventListener('resize',resize,{passive:true});resize();if(!reduce)tick()}
window.addEventListener('DOMContentLoaded',()=>{setupTabs();renderDay(Number(location.hash.replace('#day-',''))||1);initMap();setupHeroLines();$('#shareButton').onclick=share;addEventListener('hashchange',()=>{const day=Number(location.hash.replace('#day-',''));if(days[day]&&day!==state.day)renderDay(day)})});
