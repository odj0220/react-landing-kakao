import {atom} from "recoil";
import {CardItem, CardType} from "./types/card-type";

export const topCardsState = atom<CardItem[]>({
    key: 'topCardsState',
    default: [
        {
            id: 0,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '카카오페이지 X 창비 \'제3회 영어덜트 소설상\' 공모전 개최',
            keywords: ['#카카오엔터테인먼트', '#카카오엔터테인먼트', '#영어덜트소설상공모'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b7568f8c017d00001.jpeg?type=thumb&opt=C630x472'
        },
        {
            id: 1,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '멜론, 개인 감상이력 기반 음악 추천 강화',
            keywords: ['#카카오엔터테인먼트', '#멜론'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b739f794017d00001.png?type=thumb&opt=C630x472'
        },
        {
            id: 2,
            type: CardType.STOCK,
            header: '주가정보',
            title: '118,500',
            keywords: ['2021.12.14 22:59PM']
        },
        {
            id: 3,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '카카오, \'음mm\'에서 인기 성우 6인이 선발하는 \'대국민 성우 오디션\' 진행',
            keywords: ['#카카오', '#소셜오디오플랫폼'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b6744611017d00001.jpg?type=thumb&opt=C630x472'
        },
        {
            id: 4,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '카카오, "올 연말에는 \'수어 기브티콘\'으로 고마워를 표현해 보세요"',
            keywords: ['#같이가치', '#기브티콘', '#수어티콘', '#이모티콘'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b1637533017d00001.jpg?type=thumb&opt=C630x472'
        },
        {
            id: 5,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '주식회사 카카오픽코마 주식 상장 준비와 관련하여',
            keywords: ['#일본 상장', '#카카오픽코마'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b1a054be017d00001.png?type=thumb&opt=C630x472'
        },
        {
            id: 6,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '카카오, \'DJSI 월드\' 인증패 수상',
            keywords: ['#DJSI', '#DJSI월드'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/a31c67ab017d00001.jpg?type=thumb&opt=C630x472'
        },
        {
            id: 7,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '멜론, 개인 감상이력 기반 음악 추천 강화',
            keywords: ['#카카오엔터테인먼트', '#멜론'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b739f794017d00001.png?type=thumb&opt=C630x472'
        },
        {
            id: 8,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '카카오, \'음mm\'에서 인기 성우 6인이 선발하는 \'대국민 성우 오디션\' 진행',
            keywords: ['#카카오', '#소셜오디오플랫폼'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b6744611017d00001.jpg?type=thumb&opt=C630x472'
        },
        {
            id: 9,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '카카오, "올 연말에는 \'수어 기브티콘\'으로 고마워를 표현해 보세요"',
            keywords: ['#같이가치', '#기브티콘', '#수어티콘', '#이모티콘'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b1637533017d00001.jpg?type=thumb&opt=C630x472'
        },
        {
            id: 10,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '주식회사 카카오픽코마 주식 상장 준비와 관련하여',
            keywords: ['#일본 상장', '#카카오픽코마'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b1a054be017d00001.png?type=thumb&opt=C630x472'
        },
        {
            id: 11,
            type: CardType.SOCIAL,
            header: '약속과책임',
            title: '카카오는 당신과 함께 더 나은 세상을 만듭니다.',
            keywords: ['#약속과책임',  '#esg', '#소셜임팩트']
        },
    ]
});

export const bottomCardsState = atom<CardItem[]>({
    key: 'bottomCardsState',
    default: [
        {
            id: 0,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '카카오, OECD에 중소기업의 디지털트랜스포메이션 지원 사례 소개',
            keywords: ['#ESG', '#oecd', '#d4sme', '#카카오클래스', '#구독ON'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/88049729017d00001.png?type=thumb&opt=C630x472'
        },
        {
            id: 1,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '멜론, 개인 감상이력 기반 음악 추천 강화',
            keywords: ['#카카오엔터테인먼트', '#멜론'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b739f794017d00001.png?type=thumb&opt=C630x472'
        },
        {
            id: 2,
            type: CardType.STOCK,
            header: '주가정보',
            title: '118,500',
            keywords: ['2021.12.14 22:59PM']
        },
        {
            id: 3,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '카카오, \'음mm\'에서 인기 성우 6인이 선발하는 \'대국민 성우 오디션\' 진행',
            keywords: ['#카카오', '#소셜오디오플랫폼'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b6744611017d00001.jpg?type=thumb&opt=C630x472'
        },
        {
            id: 4,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '카카오, "올 연말에는 \'수어 기브티콘\'으로 고마워를 표현해 보세요"',
            keywords: ['#같이가치', '#기브티콘', '#수어티콘', '#이모티콘'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b1637533017d00001.jpg?type=thumb&opt=C630x472'
        },
        {
            id: 5,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '주식회사 카카오픽코마 주식 상장 준비와 관련하여',
            keywords: ['#일본 상장', '#카카오픽코마'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b1a054be017d00001.png?type=thumb&opt=C630x472'
        },
        {
            id: 6,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '카카오, \'DJSI 월드\' 인증패 수상',
            keywords: ['#DJSI', '#DJSI월드'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/a31c67ab017d00001.jpg?type=thumb&opt=C630x472'
        },
        {
            id: 7,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '멜론, 개인 감상이력 기반 음악 추천 강화',
            keywords: ['#카카오엔터테인먼트', '#멜론'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b739f794017d00001.png?type=thumb&opt=C630x472'
        },
        {
            id: 8,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '카카오, \'음mm\'에서 인기 성우 6인이 선발하는 \'대국민 성우 오디션\' 진행',
            keywords: ['#카카오', '#소셜오디오플랫폼'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b6744611017d00001.jpg?type=thumb&opt=C630x472'
        },
        {
            id: 9,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '카카오, "올 연말에는 \'수어 기브티콘\'으로 고마워를 표현해 보세요"',
            keywords: ['#같이가치', '#기브티콘', '#수어티콘', '#이모티콘'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b1637533017d00001.jpg?type=thumb&opt=C630x472'
        },
        {
            id: 10,
            type: CardType.NOTIFY,
            header: '보도자료',
            title: '주식회사 카카오픽코마 주식 상장 준비와 관련하여',
            keywords: ['#일본 상장', '#카카오픽코마'],
            contentImage: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/b1a054be017d00001.png?type=thumb&opt=C630x472'
        },
        {
            id: 11,
            type: CardType.SOCIAL,
            header: '약속과책임',
            title: '카카오는 당신과 함께 더 나은 세상을 만듭니다.',
            keywords: ['#약속과책임',  '#esg', '#소셜임팩트']
        },
    ]
});