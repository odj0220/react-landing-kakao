export enum CardType {
    NOTIFY = 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72',
    STOCK = 'https://www.kakaocorp.com/page/ico_stock.png',
    SOCIAL = 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/77b67489017900001.png?type=thumb&opt=C72x72',
    PRIVACY = 'https://www.kakaocorp.com/page/ico_privacy.png'
}
export type CardItem = {
    id: number,
    type: CardType,
    header: string,
    title: string,
    keywords?: string[],
    contentImage?: string
}