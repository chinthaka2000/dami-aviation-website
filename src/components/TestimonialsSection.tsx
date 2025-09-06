import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Star, Award } from 'lucide-react';
import { handleRegister } from '../utils/whatsapp';

// Cabin crew testimonials data - 10+ testimonials
const cabinCrewTestimonials = [
  {
    id: 'testimonial-1',
    name: 'Charaka Gunawardana',
    photo: '',
    role: 'Airport Cargo Agent',
    company: 'Sri Lankan Airlines',
    rating: 5,
    review: 'I found really useful and valuable that assistance and support received from Dami aviation. He gave us real time aviation related job opportunities and guide us how to pass and do well during the interview as well. He gave us in detail descriptions on the job and aviation field as well. His assistance helped me a lot to pass the interview as well. I can definitely say that it will be really helpful if you follow Dami aviation aviation courses.',
    courseCompleted: 'Cabin Crew Training Program',
    graduationYear: 2025,
    location: ''
  },
  {
    id: 'testimonial-2',
    name: 'Nethmi Kaveesha',
    photo: '',
    role: 'Student',
    company: '',
    rating: 5,
    review: 'අපේ program එක තිබ්බෙ august 26,27 දවස් දෙකේ,ඒත් 26 උදේ එන්න අපහසු අයට 25එන්න දුන්න සර්,ඉතින් program එක අපිට මේ field එකට විතරක් නෙවෙයි අපේ සාමාන්‍ය ජීවීතේටත් ගොඩක් වැදගත්❤, ඒ වගේම කෑම,බීම,නවාතැන් පහසුකම් මේ හැමදේම ලමයා සහ එයාගෙ භාරකාරයෙක්ටත් එක්ක සර් free දුන්නෙ ඒක ගොඩාක් වටිනවා❤, අපිට උගන්නන්න ආපු ගුරුවරුත් හරිම හොදයි ,ඕනම දෙයක් අපිට එයාලගෙන් අහගන්න පුලුවන් 😊 ඒ වගේම අපිට බෙහෙත් වල ඉදන් free දුන්නා හැමෝටම❤ සර් ලොකු වියදමක් මේ වෙනුවෙන් තනියම දරනවා,ඇත්තටම කියන්න කිසිම අඩුවක් නෑ සර්,හැමදේම අපි හිතුවටත් වඩා හොදට පහසුකම් එක්කම සර් අපිට දුන්නා❤,සර් හැම ලමයෙක්ම අඩු පාඩු තනි තනිවම කියලා උපදෙස් දුන්න අපිට හදාගන්න,ඒක ගොඩාක් වටින සර්,දැන් කාලේ එහෙම ගුරුවරු නෑ, ඉතින් සර්ට ගොඩාක් ස්තූති❤,සර්ගෙ බලාපොරොත්තු ඉෂ්ඨ සිද්ද වෙන්න කියලා මන් ප්‍රාර්තනා කරනවා ❤💖✨🙏',
    courseCompleted: 'Cabin Crew Training Program',
    graduationYear: 2025,
    location: ''
  },
  {
    id: 'testimonial-3',
    name: 'Upeksha Hansini',
    photo: '',
    role: 'Student',
    company: '',
    rating: 5,
    review: 'ඇත්තටම මම මෙ course එක කරනවද නැද්ද කියලා හිතාගන්න බැරුව ඉදියෙ එත් විස්වාසය කරලා මම මෙ course එක කලා ඇත්තටම මෙක course එක හම්බ උනෙත් අහම්බෙන් එක අහම්බයක් උනත් අද මම ගොඩාක් සතුටු වෙනවා අහම්බෙන් හම්බ වෙලා විස්වාසය කල්ලා ගොඩාක් දෙවල් මම ඉගෙන ගත්තා❤.එ අපෙ සර් හින්දා .online clz එකෙදි හැමදෙම ඉගෙන්නුවා ජිවිතෙටම අවශ්‍ය දෙවල් කියලා දුන්නා.මන් එවා ගුරුවරයෙක්ගෙන් ඉගෙන ගෙන නැ මෙ වෙනකන්..ඇත්තටම අපෙ සර් අපි මොන දෙ ඇහුවත් එවට උත්තරෙ දෙනවා අපිට හැමදෙම කියා දෙනවා.දවස් දෙකෙ training program එකෙදි පවා අපෙ සර් එ උගන්නපු විදිය ඇත්තටම හරි අමුතුයි අරමුනට යනවනම් එ උගන්නපු එ හැමදෙම වටිනවා ❤🥺..සැහෙන්න අඩු පාඩු හදාගත්තා එවගෙන්..💐මෙ වගෙ සර් කෙනෙක් දැක්කමයි.මෙ වගෙ දැනුමක් දෙන යාලුවෙක් වගෙ ලගින් ඉදලා හැමදෙම කතා කරන්න්න පුලුවන් මගෙ ජිවිතෙටනම් මට හම්බ උනෙ මෙ සර්ව විතරයි.එ වගෙම අපිට දෙන පැකෙජස් එවා ඇත්තටම වටිනාකම් ඉහලයි.ඉතිම් මෙච්චර අපි වෙනුවෙන් කැප කරන අපෙ සර්ට හැමදාම අපෙ සර් හිතන එ හැම බලාපොරොත්තුවක්ම ඉෂ්ට වෙන්න කියලා ප්‍රාර්ථනා කරනවා..හදවතින්ම මෙ කරපු දෙවල්වලට ස්තුතියි සර් ... අපෙ සර්❤Dami Aviation lanka😌🩷',
    courseCompleted: 'Cabin Crew Training Program',
    graduationYear: 2025,
    location: ''
  },
  {
    id: 'testimonial-4',
    name: 'Madushani Uyanwatta',
    photo: '',
    role: 'Student',
    company: '',
    rating: 5,
    review: 'මම පන්තියට ආව දවසේ ඉදලා සර් උගන්නපු හැම දේම මට හොදින් තේරුම් ගන්න පුළුවන් වුනා ඇත්තටම බොරු කියලා හිත හදන්න ඔනී නෑ ටික දවසක් මම පන්තියේ හිටියා ඒ ටිකේ උගන්නපු හැම දේමත් මට හොදින් තේරුනා මම ජොබ් එකක් කරන ගමන් තමයි මේ පන්තියට ගියේ මට ටික දවසක් යද්දී පන්තිය මිස් වුනා මම සර්ට කිවුවා පන්තියෙන් අයින් වෙන්න ඔනී මට ගොඩක් මිස් වුනා කියලා මට සර් කිව්වා එපා අයින් වෙන්න එපා මම ඔයාට මිස් වුන හැම දේම අල්ල ගන්න උදවු කරන්නම් කියලා මම පන්තියට ආවට කමක් නැද්ද කියලා ආයේ කවදද පටන් ගන්නේ ඇහැව්වා සර් හරිම කරුනාවන්තයි මම දැකපු හොද ගුරුවරයෙක් මට කිවූවා ආයේ පන්තියක් පටන් ගන්නේ මාස තුනකින් ඔයා ගිය බැජ්‍ එකේ එක්කෙනෙක් ඔයාගේ නම මම අයින් කරේ නෑ ඔයා ඒකට එන්න මම ඔයාට උගන්නපු හැම දේම එවන්නම් කියලා මම ඒ ටික පොටෝ කොෆි කරන් හොදට පාඩම් කරලා තමයි 26/ 27 තිබුන පුහුණුවට ආවේ මට ඒ කරපූ උදවුවට සර්ට ගොඩක් පින් මම වැටුන වෙලාවේ අත දුන්නේ අපේ Dami Aviation Lanka ❤❤ එකේ සර් ඒ නිහතමානී ගුරුතුමාට මම නම් හිතන්නේ නෑ කවදාවත් වරදී කියලා ගොඩක් ස්තූතියි සර් අපිට පුහුණුවේදී උනත් කන්නද බොන්නද මදුරුකොයිල් එක උනත් දුන්නට කිසීම අඩු පාඩුවක් නම් කරේ නෑ කවදාවත් අමතක නොවන එකම චරීතය Dami Aviation Lanka❤ අපේ දමිත් සර් ගොඩක් ස්තුතියි සර් ❤',
    courseCompleted: 'Cabin Crew Training Program',
    graduationYear: 2025,
    location: ''
  },
  {
    id: 'testimonial-5',
    name: 'Bavani Sharanaya',
    photo: '',
    role: 'Student',
    company: '',
    rating: 5,
    review: 'ඇත්තටම කිව්වොත් අපේ මේ  Dami Aviation course එක මුල ඉදලම ඉගෙනීමේ කටයුතු වල සිටම ඉතාමත් පිලිවෙලකට සහ හොදින් තේරුම් ගැනීම්ට හැකිවන අයුරින් අපේ සර් අපිට සම්පූර්ණ දැනුම ලබා දුන්නා.ඒ වගේම දෙදින පුහුනු වැඩසටහන ද ඉතාමත් හොදින් දරුවන්ට හොද පුහුණුවක් ලබා දුන්න.ගොඩක්ම විශේෂ දේ තමයි අපේ සර් අපිත් එක්ක හරිම එකමුතුවෙන් සහ මිත්‍රශීලීව අපිත් එක්ක මුලු මාස තුනේම වැඩ කරා.මට නම් ඒ මාස තුනම ගොඩක් වටින කාලයක් සහ මගේ ජීවිතේ ගමන් මගද ගොඩක් වෙනස් කරන කාලයක් වුනා.මේ හැමදෙයකටම අපේ සර් ගොඩක් මහන්සි වුනා.ඒ වෙනුවෙන් සර්ට ගොඩක් පින්.තවතවත් දරුවන්ට මේ වැඩසටහන උගන්වා ජීවිත ගමන සාර්ථක කරලීමට ශක්තිය ලැබෙන්න කියල ප්‍රාර්ථනා කරනවා',
    courseCompleted: 'Cabin Crew Training Program',
    graduationYear: 2025,
    location: ''
  },
  {
    id: 'testimonial-6',
    name: 'Nethmi Prasanna',
    photo: '',
    role: 'Airport Service Agent',
    company: 'Sri Lankan Airlines',
    rating: 5,
    review: 'මුලින්ම කියන්න ඕනෙ මගෙ ජීවිතේ මට තිබුණු ලස්සනම හීනයක්...,හීනෙකටත් වඩා ඇත්තටම ඒක ඉලක්කයක්💯හැබෑ කරගන්න මට උදව් කරේ Dami සර්❤ Aviation ගැන කිසිම දෙයක් නොදැන හිටපු මට හැමදේම කියලා දීලා සාර්ථක වෙන්න උදව් කරේ සර්❤ මේක පුංචි ගමනක් නෙවෙයි..අවුරුද්දකට වඩා වැඩි කාලයක් පුරාවට මේ තැනට එනකල් සර් දුන්න support එක මාරයි❤💯 CV එක පවා හදලා දීලා,vacancy එකට apply කරන තැන ඉඳන්ම මට සර් ගොඩාක් උදව් කරා.ඊටපස්සෙ තිබුණු හැම exam එකකටම සර් ගොඩක් උදව් කරා.අපි වෙනුවෙන් exam target questions packages හදලා,seminar තියලා ඇත්තටම අපිටත් වඩා අපි වෙනුවෙන් සර් කැපවුණා🥺❤ දන්නෙවත් නැති, අඳුරන්නෙවත් නැති අය වෙනුවෙන් කෙනෙකුට මේ තරම් කැප වෙන්න පුලුවන්ද කියලත් මට වෙලාවකට හිතුණා... කියන්න වචන නෑ අපේ Dami සර් මාරම චරිතයක්💯❤ ඉතින් අන්තිමට අවුරුද්දකට පස්සෙ final interview email එක එනකල්ම සර් අපිත් එක්ක හිටියා. අවුරුද්දක් කියන්නෙ ලොකු කාලයක්..ඒත් මොන වෙලාවක මොන දේ ඇහුවත් සර් අපිව මඟ ඇරල නෑ කවදාවත්🤍හැමදාම අපි නොදන්න හැමදේම කියලා දුන්නා. සර්ට ගොඩක් පින්.ගොඩක් ස්තුතියි❤ මගෙ අම්මා තාත්තාගෙ උදව්වත් එක්කම මගේ සර්ගෙ මඟපෙන්වීම, සර්ගෙ උපකාර නැත්නම් මගෙ හීනෙට යන එක මට හීනයක් විතරක්ම වෙන්න ඉඩ තිබුනා. ඒත්,සර්ට ස්තුතිවන්ත වෙන්න අද මට ආඩම්බරෙන් කියන්න පුලුවන් මම Srilankan Airlines Airport Service Agent කෙනෙක් කියලා💙ඒක මට ගොඩාක් වටිනවා... ඒත් එක්කම මම මගෙ මුළු හදවතින්ම සර්ට සුබ පතනවා සර්ගෙ හැමදේම සාර්ථක කරගෙන, ඉස්සරහටත් මේ වගේ එකම හීනයක් වෙනුවෙන්ම කට්ට කන කොල්ලන්ගෙ කෙල්ලන්ගෙ හීන හැබෑ කරගන්න ශක්තියක් වෙන්න ලැබෙන්න කියලා❤ ඉතින් හිතන පතන හැමදේම ලස්සනට හරිගස්සාගෙන ,පටන් ගත්ත මේ ලස්සන ගමන තව ගොඩාක් දුර සාර්ථකව යන්න ලැබෙන්න කියලා ප්‍රාර්ථනා කරනවා❤❤‍🔥 🛫❤ දවසක් එයි..ලෝකෙ කොහෙ හිටියත් aviation කීව ගමන් dami කියන නම හැමෝටම මතක් වෙන... 💯❤‍🔥✈ ❤ Dami Aviation Lanka ❤ මගෙ ජීවිතේ ලස්සනට වෙනස් කළා.අනිවාර්යයෙන්ම දවසක එයා තවත් ගොඩාක් අයගෙ ජීවිත හරි ලස්සනට වෙනස් කරාවි.🤍✨',
    courseCompleted: 'Cabin Crew Training Program',
    graduationYear: 2025,
    location: ''
  },
  {
    id: 'testimonial-7',
    name: 'Ahinsa Sandamini',
    photo: '',
    role: 'Airport Service Agent',
    company: 'Sri Lankan Airlines',
    rating: 5,
    review: 'I didn\'t attend to the seminar because I didn\'t have a chance due to my studies. But I\'ve been in your WhatsApp group ever since we applied for Airport service agent vacancy. I\'m sending this message to show the appreciation towards all the instructions, information, guidance and advices you have been given so far. They meant a lot. I was short listed for the interview which held few days ago and got selected for the medical clearance as well. So I thought. I should thank you for all those knowledge and support i got from your group. Thank you so much sir and may you be blessed to guide thousands of more youngsters in the future',
    courseCompleted: 'Cabin Crew Training Program',
    graduationYear: 2025,
    location: ''
  },
  {
    id: 'testimonial-8',
    name: 'Piyumi Perera',
    photo: '',
    role: 'Airport Service Agent',
    company: 'Sri Lankan Airlines',
    rating: 5,
    review: 'Today I was able to get this job really because of sir. Sir, in the previous exam too, he told me what to write and what are the questions. And so is the final interview. Everything was explained correctly, from the way to dress to the quastions. Thank you very much for all that sir.🥹🙏🏻',
    courseCompleted: 'Cabin Crew Training Program',
    graduationYear: 2025,
    location: ''
  },
  {
    id: 'testimonial-9',
    name: 'Jinethma Bandara',
    photo: '',
    role: 'Airport Service Agent',
    company: 'Sri Lankan Airlines',
    rating: 5,
    review: 'Hello sir, this is Jinethma again, just typing to let you know that I have received the mail for final administrative process for the post, Airport Service Agent… Thank you, thank you & thank you so much ✨I wouldn\'t have come this far without your support.. I take this moment to thank you for every word you type along the group chat.. The reason why I didn\'t get back to you was because after my interview i was so worried and scared about my next step😂aka, "medicals". so I thought it would be great to reach out to you after the whole process … so please don’t misunderstand me.🙏 Your help will always be living rent free in my memories. i was unable to join your seminar as i had just come home from work...however i could make it to the recording today, and I should say... As always, 2 great hours. 🤩🤩🤩 there wasn\'t a single second I could omit...Intro, grooming, body language and form questions had been explained straightforwardly. I love the part where you explained about one\'s first impression..here, you made it very clear and helped me understand the material. I know how much a person\'s first impression can influence their whole assessment itself. I greatly appreciate ur willingness to help others and learn from feedbacks.😇🙏🏻 Honestly without your help, I wouldn\'t make it to this far..and I would like to humbly accept the fact that I\'m gonna need it in future too..✨🤍Thank you sooo much',
    courseCompleted: 'Cabin Crew Training Program',
    graduationYear: 2025,
    location: ''
  },
  {
    id: 'testimonial-10',
    name: 'Shakya Perera',
    photo: '',
    role: 'Airport Service Agent',
    company: 'Sri Lankan Airlines',
    rating: 5,
    review: 'I passed the interview today. Also selected for the medicals ☺ Thank you so much for your guidance sir ❤ Kiyanna thiyenne sirge guidance eka marama watinawa sirge motivation eka pawa "Do not give up 💪try and try one day u can fly". Sir attama sir kiyapu dewal sirge support ekath thibba apita hoyala baluwa mulu process ekedima attama thank u so much sir ❤'
  },
  {
    id: 'testimonial-11',
    name: 'Amaya Athukorala',
    photo: '',
    role: 'Airport Service Agent',
    company: 'Sri Lankan Airlines',
    rating: 5,
    review: 'Sir I passed the interview🥺.. Thank You So Much for ur guidance and for everything which you have done until today.. And even the final seminar interview was also really helpful for the today\'s success.'
  },
  {
    id: 'testimonial-12',
    name: 'Avishka Madushi',
    photo: '',
    role: '1st Badge',
    company: '',
    rating: 5,
    review: 'සර්, මම ටිකක් තලෙලුයි, චොක්ලට් කලර් ගර්ල් කෙනෙක්,ඒත් පොඩි කාලෙ ඉදල මේ cabin crew dream එක මගෙ ඔලුවෙ තියෙන්නෙ, මම ගිය අවුරුද්දේ srilankan airline එකේ තිබුණු work in interview එකට ගියා, ඒත් මගෙ දකුණු අතේ වැලමිටේ පොඩි කාලෙ වෙච්චි තුවාල පැල්ලමක් නිසා මම reject උනා,තව මගෙ ගොඩක් අඩුපාඩු තියෙන්න ඇති,මොකද ජීවිතේ පළවෙනි වතාවට මම interview එක්කට face කරේ😊, ඊටපස්සේ සර්ගෙ කෝස් එක පටන් ගන්නව කියල fb වලින් දැකල තමයි මම මේකට ජොයින් උනේ. දැන් කෝස් එක ඉවර වෙන්නත් ලගයි, ඔන්ලයින් උනත් කියල දුන්නු දේවල් සේර්ම හොඳට තේරුනා...සහෝදරයෙක් වගේ අපි හැමෝටම හොදින් දන්නෙ නැති හැම දෙයක්ම කියල දුන්න, ඒක ගොඩාක් ස්තුති සර්🥰...'
  },
  {
    id: 'testimonial-13',
    name: 'Shavindya Madhushani',
    photo: '',
    role: '05 Batch',
    company: '',
    rating: 5,
    review: 'DAMI AVIATION LANKA PVT ආයතනය මගින් මෙහෙයවනු ලබන INTERNATIONAL AIRLINE CABIN CREW ⁣කෝස් එක ගැන මම දැන ගත්තේ මගෙ යාලුවෙක්ගෙන් ඒ යාලුවා සර්ගෙ පලවෙනි badge එකෙ කෙනෙක්. ඉතින් මම හිතුවෙ නෑ මේ කෝස් එක මේ තරම් වටිනවා කියලා. සර් අපිට මුල ඉදලම පැහැදිලිව හැම දෙයක්ම අපිට කියලා දුන්නා, ඒ වගේම අපෙ අඩුපාඩු හැම දෙයක්ම සර් අපි පෙන්නලා දුන්නා. cabin crew කෙනෙක් වෙන්න නම් අපි ඒ වෙනුවෙන් ගොඩක් මහන්සි වෙන්න ඕන ඒ විතරක් නෙවෙයි නිවැරදි මග පෙන්වීමක් තියෙන්න ඕන. සර්ට ගොඩක් පිං මේ වගේ අඩු මුදලකට airline cabin crew කෝස් එකක් කරනවට ❤❤'
  },
  {
    id: 'testimonial-14',
    name: 'Dishala Fattrick',
    photo: '',
    role: '2nd Batch',
    company: '',
    rating: 5,
    review: 'You are the best teacher I have ever met. Caz of I’ve been seeing your dedication and determination for refer those who has the dream to be a cabin crew, to their dream. Due to this, I decided that you are the best way to achieve my dream. During those 2 days I enjoyed the programme. Your friendship as a friend apart from your teacher hood, was very loving for all of us. I learned a lot from the training programme and I know they will be very supportive for my goal. Thank you so much sir. ❤'
  },
  {
    id: 'testimonial-15',
    name: 'Pumudi Karunarathna',
    photo: '',
    role: 'Batch 02',
    company: '',
    rating: 5,
    review: 'Mn sirwa dengtthe ar airport service package ek gddi..ek mt arn duneth ape akka..psse mn sirge page ek follow kl fb ekee…sir psse course ek wistr demmt psse mn bluw klin batch ek kttyge videos tik ehema…ethkot a lmi kiypuwath ekk thm podi wishwasayk awaa sir hodt me course ek krnw athi kiyl..anik sir whtsapp group ekt msg daan widiyen lamint ek gen asawa athi krwal issrht thallu krn kenk kiyl denun mt🥹program ek gen kiywath eknm supiri💥🔥ek gen kiynn kisim adu paduwak nh sir…athtgm kiywtg issr mn gini niwan tank walt hen byi😂😂ewa lgin ynne nhaa.ane mnd pissu mt😂😂eth den ehm nhaa😌💥godaaak dewl api a course eken igen gaththa sir….me tik eda mn kiynn idiye sir😒thank u so much for everything that you have done for us😭❤ #highly recommended dami aviation 👌🏻✈'
  },
  {
    id: 'testimonial-16',
    name: 'Saneshi Basnayake',
    photo: '',
    role: 'Batch 03',
    company: '',
    rating: 5,
    review: 'Aviation කියන්නේ මට පිස්සුවක් වගේ දෙයක්...ඒක චුටි කාලේ ඉදන් මට තිබුනු උනක් සර්...ඒත් සර් ඒ හැමදේම මං al එකත් එක්කම අතෑරියා...සර් group එකට දාන දේවල් වලින් මං අතෑරලා දාපු මගේ හීනේට ආපහු යන්න ඕන කියලා හිතුනා...Programme එක අවසානේ හිතුනේ අපරාදේ තව දවසක් ඉන්න තිබ්බනම් කියලා සර්..Programme එක සර් හොදටම තිබ්බා..සර් ගැන කියන්නම ඕන..මුලින්ම ඉතින් බය හිතුනා සර් කොයි වගේද දන්නේ නෑ කියලා ...සර් අපිත් එක්ක යාලුවෙක් සහෝදරයෙක් වගේ හිටියේ ඒ නිසා අපට ඕන දෙයක් සර් එක්ක කියන්න පුළුවන් වුනා..ගොඩාක් පින් සර්.'
  },
  {
    id: 'testimonial-17',
    name: 'Chamodya Tathsarani',
    photo: '',
    role: 'Batch 03',
    company: '',
    rating: 5,
    review: 'Mulinma mn me course eka thoragaththu widiha kiyannam mulinma bayakin thama meka thoragaththe meka hodaida kohomada danne wage dewal godak oluwata awa...but mage teacher mata recommend kara Dami Aviation Lanka eka godak hodai kiyala ethanadi thama mata wishwasayak athiune me gana... Aththatam api marma lucky...🥰🥰💪💪 sir methnin nawathinneth ne kiyala api hodatama dannawa apiwa geniynna puluwan uparima sarthakathwayata apiwa aniwarenama aran yanawamai e gana 💯 💯 wishwasai..💖 highly recommended Dami Aviation Lanka💯💯💯💯💪💪'
  },
  {
    id: 'testimonial-18',
    name: 'Vihangi Bandara',
    photo: '',
    role: '4th Batch',
    company: '',
    rating: 5,
    review: 'It was a great pleasure to meet you, Sir. I learned so many things from you not only about becoming a cabin crew member, but also valuable advice for life and the motivation to chase our goals. There was so much we gained from this course, and the two-day training program was simply amazing🤗 I am truly grateful for this opportunity. As you said, you are always behind us, and we can really feel your support. Thank you so much for being there for us sir.♥ Through this course, I’ve learned and improved so many skills, both professionally and personally. I highly recommend this course to anyone interested in this field💯. Once you take us in as your students, you never leave us until we achieve our dreams and that is so clear in the way you guide us. Once again, thank you so much for everything you have done for us, Sir ❤🥰'
  },
  {
    id: 'testimonial-19',
    name: 'Nikini Gunawardhana',
    photo: '',
    role: '4th Batch',
    company: '',
    rating: 5,
    review: 'Course එක නම් නියමයි❤ඇත්තටම වෙන කියන්න වචන නැ සර්. FB එකේ උඩට පල්ලට යද්දි සර්ගෙ post එකක් අහම්බෙන් දැකලා කතා කරලා cabin crew කෙනෙක් වෙන්න තියෙන ආසාව නිසාමයි group එකට join උනේ. පලවෙනි class දවස බලමුකො කොහොමද කියලා හිතාගෙන class එකට join වුනේ. එදා සර් හැම දෙයක් ගැනම මුලක ඉදන් කියලා දුන්නා... Thank you so much sir........🥺❤'
  },
  {
    id: 'testimonial-20',
    name: 'Samadhi Chethana',
    photo: '',
    role: '4th Batch',
    company: '',
    rating: 5,
    review: 'සර් course එක නම් ඇත්තටම නියමයි. නියමයි කියන්නේ ජිවිතේ දැනගෙන හිටපු නැති දේවල් ගොඩාක් ඉගෙන ගත්තා. ඇත්තටම සර් මම මේ course එක ගැන දැන ගත්තේ ground handling තේරුන අක්ක කෙනෙක්ගෙන්. Training දවස් දෙකෙත් අපිට හොදට සැලකුවා. අපි ගැන ලොකු අවදානයක් දීලා තියෙනව කියල මට හිතුනා. සර්ට ගොඩාක් ස්තූතිය. 🫶'
  }
];

const TestimonialsSection = () => {
  return (
    <>
      <section id="testimonials" className="py-20 bg-gradient-to-b from-[#0a1929] to-[#0f2942] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4175C' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#D4175C]/10 backdrop-blur-sm border border-[#D4175C]/20 rounded-full px-6 py-2 mb-6">
              <Users className="w-5 h-5 text-[#D4175C]" />
              <span className="text-[#D4175C] font-medium">Student Success Stories</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5054A] to-[#D4175C]">Graduates</span> Say
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Hear from our successful graduates who are now flying with top airlines worldwide.
              Their journey from training to career success speaks volumes about our program quality.
            </p>

            {/* Statistics */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="flex items-center space-x-2 bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-lg px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">4.9/5</span>
                <span className="text-gray-400 text-sm">Average Rating</span>
              </div>

              <div className="flex items-center space-x-2 bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-lg px-4 py-2">
                <Award className="w-5 h-5 text-[#D4175C]" />
                <span className="text-white font-semibold">20+</span>
                <span className="text-gray-400 text-sm">Success Stories</span>
              </div>

              <div className="flex items-center space-x-2 bg-[#0f2942]/50 backdrop-blur-sm border border-gray-700/30 rounded-lg px-4 py-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">95%</span>
                <span className="text-gray-400 text-sm">Job Placement</span>
              </div>
            </div>
          </div>

          {/* Testimonial Cards Grid - Matching Your Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cabinCrewTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Testimonial Card - Matching Your Design */}
                <div className="relative group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden">

                  {/* Top Quote Mark */}
                  <div className="absolute top-4 left-4 text-6xl text-[#D4175C]/20 font-bold leading-none z-20">
                    "
                  </div>

                  {/* Bottom Quote Mark */}
                  <div className="absolute bottom-20 right-4 text-6xl text-[#D4175C]/20 font-bold leading-none rotate-180 z-20">
                    "
                  </div>

                  {/* Main Card Content */}
                  <div className="relative z-10">
                    {/* DAMI Aviation Gradient Header Section */}
                    <div className="bg-gradient-to-br from-[#D4175C] to-[#B5054A] p-8 pb-16 text-white relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                      </div>

                      {/* Testimonial Header */}
                      <div className="relative z-10 text-center">
                        <h3 className="text-2xl font-bold mb-4 text-white/90">Testimonial</h3>
                        <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
                          {testimonial.review.length > 120 ? testimonial.review.substring(0, 120) + '...' : testimonial.review}
                        </p>
                      </div>

                      {/* Student Photo - Positioned to overlap */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg">
                          <img
                            src={testimonial.photo}
                            alt={testimonial.name}
                            className="w-full h-full rounded-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=D4175C&color=ffffff&size=64`;
                            }} />
                        </div>
                      </div>
                    </div>

                    {/* White Bottom Section */}
                    <div className="bg-white px-6 pt-12 pb-6 text-center">
                      {/* Star Rating */}
                      <div className="flex justify-center items-center space-x-1 mb-4">
                        {Array.from({ length: 5 }, (_, starIndex) => (
                          <span
                            key={starIndex}
                            className={`text-2xl ${starIndex < testimonial.rating
                              ? 'text-yellow-400'
                              : 'text-gray-300'}`}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>

                      {/* Student Name */}
                      <h4 className="text-gray-800 font-bold text-lg mb-1">{testimonial.name}</h4>

                      {/* Role and Company */}
                      <p className="text-[#D4175C] text-sm font-semibold mb-1">{testimonial.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{testimonial.company}</p>

                      {/* Additional Info */}
                      <div className="text-xs text-gray-500 space-y-1">
                        <p>Cabin Crew Training Program</p>
                        <p>Graduated 2025</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D4175C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#B5054A]/10 to-[#D4175C]/10 backdrop-blur-sm border border-[#D4175C]/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Aviation Career?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our successful graduates and take the first step towards an exciting career in aviation.
              Our comprehensive training program will prepare you for success with top airlines worldwide.
            </p>
            <button onClick={handleRegister} className="bg-gradient-to-r from-[#B5054A] to-[#D4175C] hover:from-[#D4175C] hover:to-[#B5054A] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#D4175C]/25 hover:-translate-y-1">
              Register Now
            </button>
          </div>
        </div>
      </section>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default TestimonialsSection;