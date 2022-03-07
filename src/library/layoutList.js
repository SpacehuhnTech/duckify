import win_be from './win/be.json'
import win_bg from './win/bg.json'
import win_cacms from './win/ca-cms.json'
import win_cafr from './win/ca-fr.json'
import win_chde from './win/ch-de.json'
import win_chfr from './win/ch-fr.json'
import win_cz from './win/cz.json'
import win_de from './win/de.json'
import win_dk from './win/dk.json'
import win_ee from './win/ee.json'
import win_esla from './win/es-la.json'
import win_es from './win/es.json'
import win_fi from './win/fi.json'
import win_fr from './win/fr.json'
import win_gb from './win/gb.json'
import win_gr from './win/gr.json'
import win_hu from './win/hu.json'
import win_ie from './win/ie.json'
import win_in from './win/in.json'
import win_is from './win/is.json'
import win_it from './win/it.json'
import win_lt from './win/lt.json'
import win_lv from './win/lv.json'
import win_nl from './win/nl.json'
import win_no from './win/no.json'
import win_pl from './win/pl.json'
import win_ptbr from './win/pt-br.json'
import win_pt from './win/pt.json'
import win_ro from './win/ro.json'
import win_ru from './win/ru.json'
import win_se from './win/se.json'
import win_si from './win/si.json'
import win_sk from './win/sk.json'
import win_tr from './win/tr.json'
import win_ua from './win/ua.json'
import win_us from './win/us.json'

import mac_be from './mac/be.json'
import mac_bg from './mac/bg.json'
import mac_cafr from './mac/ca-fr.json'
import mac_chde from './mac/ch-de.json'
import mac_chfr from './mac/ch-fr.json'
import mac_cz from './mac/cz.json'
import mac_dk from './mac/dk.json'
import mac_ee from './mac/ee.json'
import mac_es from './mac/es.json'
import mac_esla from './mac/es-la.json'
import mac_fi from './mac/fi.json'
import mac_fr from './mac/fr.json'
import mac_gb from './mac/gb.json'
import mac_gr from './mac/gr.json'
import mac_hu from './mac/hu.json'
import mac_in from './mac/in.json'
import mac_is from './mac/is.json'
import mac_it from './mac/it.json'
import mac_lt from './mac/lt.json'
import mac_lv from './mac/lv.json'
import mac_nl from './mac/nl.json'
import mac_no from './mac/no.json'
import mac_pl from './mac/pl.json'
import mac_pt from './mac/pt.json'
import mac_ptbr from './mac/pt-br.json'
import mac_ro from './mac/ro.json'
import mac_ru from './mac/ru.json'
import mac_se from './mac/se.json'
import mac_si from './mac/si.json'
import mac_sk from './mac/sk.json'
import mac_tr from './mac/tr.json'
import mac_ua from './mac/ua.json'

import mac_de from './mac/de.json'
import mac_us from './mac/us.json'

const layoutList = {
    'mac': [
        {
            name: 'be',
            json: mac_be,
            flag: '🇧🇪',
        },
        {
            name: 'bg',
            json: mac_bg,
            flag: '🇧🇬',
        },
        {
            name: 'ca-fr',
            json: mac_cafr,
            flag: '🇨🇦',
        },
        {
            name: 'ch-de',
            json: mac_chde,
            flag: '🇨🇭',
        },
        {
            name: 'ch-fr',
            json: mac_chfr,
            flag: '🇨🇭',
        },
        {
            name: 'cz',
            json: mac_cz,
            flag: '🇨🇿',
        },
        {
            name: 'de',
            json: mac_de,
            flag: '🇩🇪',
        },
        {
            name: 'dk',
            json: mac_dk,
            flag: '🇩🇰',
        },
        {
            name: 'ee',
            json: mac_ee,
            flag: '🇪🇪',
        },
        {
            name: 'es',
            json: mac_es,
            flag: '🇪🇸',
        },
        {
            name: 'es-la',
            json: mac_esla,
            flag: '🌎',
        },
        {
            name: 'fi',
            json: mac_fi,
            flag: '🇫🇮',
        },
        {
            name: 'fr',
            json: mac_fr,
            flag: '🇫🇷',
        },
        {
            name: 'gb',
            json: mac_gb,
            flag: '🇬🇧',
        },
        {
            name: 'gr',
            json: mac_gr,
            flag: '🇬🇷',
        },
        {
            name: 'hu',
            json: mac_hu,
            flag: '🇭🇺',
        },
        {
            name: 'in',
            json: mac_in,
            flag: '🇮🇳',
        },
        {
            name: 'is',
            json: mac_is,
            flag: '🇮🇸',
        },
        {
            name: 'it',
            json: mac_it,
            flag: '🇮🇹',
        },
        {
            name: 'lt',
            json: mac_lt,
            flag: '🇱🇹',
        },
        {
            name: 'lv',
            json: mac_lv,
            flag: '🇱🇻',
        },
        {
            name: 'nl',
            json: mac_nl,
            flag: '🇳🇱',
        },
        {
            name: 'no',
            json: mac_no,
            flag: '🇳🇴',
        },
        {
            name: 'pl',
            json: mac_pl,
            flag: '🇵🇱',
        },
        {
            name: 'pt',
            json: mac_pt,
            flag: '🇵🇹',
        },
        {
            name: 'pt-br',
            json: mac_ptbr,
            flag: '🇧🇷',
        },
        {
            name: 'ro',
            json: mac_ro,
            flag: '🇷🇴',
        },
        {
            name: 'ru',
            json: mac_ru,
            flag: '🇷🇺',
        },
        {
            name: 'se',
            json: mac_se,
            flag: '🇸🇪',
        },
        {
            name: 'si',
            json: mac_si,
            flag: '🇸🇮',
        },
        {
            name: 'sk',
            json: mac_sk,
            flag: '🇸🇰',
        },
        {
            name: 'tr',
            json: mac_tr,
            flag: '🇹🇷',
        },
        {
            name: 'ua',
            json: mac_ua,
            flag: '🇺🇦',
        },
        {
            name: 'us',
            json: mac_us,
            flag: '🇺🇸',
        },
    ],
    'win': [
        {
            name: 'be',
            json: win_be,
            flag: '🇧🇪',
        },
        {
            name: 'bg',
            json: win_bg,
            flag: '🇧🇬',
        },
        {
            name: 'ca-cms',
            json: win_cacms,
            flag: '🇨🇦',
        },
        {
            name: 'ca-fr',
            json: win_cafr,
            flag: '🇨🇦',
        },
        {
            name: 'ch-de',
            json: win_chde,
            flag: '🇨🇭',
        },
        {
            name: 'ch-fr',
            json: win_chfr,
            flag: '🇨🇭',
        },
        {
            name: 'cz',
            json: win_cz,
            flag: '🇨🇿',
        },
        {
            name: 'de',
            json: win_de,
            flag: '🇩🇪',
        },
        {
            name: 'dk',
            json: win_dk,
            flag: '🇩🇰',
        },
        {
            name: 'ee',
            json: win_ee,
            flag: '🇪🇪',
        },
        {
            name: 'es-la',
            json: win_esla,
            flag: '🌎',
        },
        {
            name: 'es',
            json: win_es,
            flag: '🇪🇸',
        },
        {
            name: 'fi',
            json: win_fi,
            flag: '🇫🇮',
        },
        {
            name: 'fr',
            json: win_fr,
            flag: '🇫🇷',
        },
        {
            name: 'gb',
            json: win_gb,
            flag: '🇬🇧',
        },
        {
            name: 'gr',
            json: win_gr,
            flag: '🇬🇷',
        },
        {
            name: 'hu',
            json: win_hu,
            flag: '🇭🇺',
        },
        {
            name: 'ie',
            json: win_ie,
            flag: '🇮🇪',
        },
        {
            name: 'in',
            json: win_in,
            flag: '🇮🇳',
        },
        {
            name: 'is',
            json: win_is,
            flag: '🇮🇸',
        },
        {
            name: 'it',
            json: win_it,
            flag: '🇮🇹',
        },
        {
            name: 'lt',
            json: win_lt,
            flag: '🇱🇹',
        },
        {
            name: 'lv',
            json: win_lv,
            flag: '🇱🇻',
        },
        {
            name: 'nl',
            json: win_nl,
            flag: '🇳🇱',
        },
        {
            name: 'no',
            json: win_no,
            flag: '🇳🇴',
        },
        {
            name: 'pl',
            json: win_pl,
            flag: '🇵🇱',
        },
        {
            name: 'pt-br',
            json: win_ptbr,
            flag: '🇧🇷',
        },
        {
            name: 'pt',
            json: win_pt,
            flag: '🇵🇹',
        },
        {
            name: 'ro',
            json: win_ro,
            flag: '🇷🇴',
        },
        {
            name: 'ru',
            json: win_ru,
            flag: '🇷🇺',
        },
        {
            name: 'se',
            json: win_se,
            flag: '🇸🇪',
        },
        {
            name: 'si',
            json: win_si,
            flag: '🇸🇮',
        },
        {
            name: 'sk',
            json: win_sk,
            flag: '🇸🇰',
        },
        {
            name: 'tr',
            json: win_tr,
            flag: '🇹🇷',
        },
        {
            name: 'ua',
            json: win_ua,
            flag: '🇺🇦',
        },
        {
            name: 'us',
            json: win_us,
            flag: '🇺🇸',
        },
    ]
}

export default layoutList