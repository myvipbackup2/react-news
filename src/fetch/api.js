/**
 * Created by lizixiang on 2017/7/16.
 */
//Json Bird 代理跨域
const JsonBird = 'https://bird.ioliu.cn/v1?url=';

//今日头条API

//焦点
export const focus = JsonBird + "https://www.toutiao.com/api/pc/focus/";

//热门
export const behot = JsonBird + "https://www.toutiao.com/api/pc/feed/?min_behot_time=0&category=__all__&utm_source=toutiao&widen=1&tadrequire=true&as=A1F5A9F63B96F11&cp=596B16FFF1917E1";

//科技
export const technology = JsonBird + "https://www.toutiao.com/api/pc/feed/?category=news_tech&utm_source=toutiao&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A185E9F6AFC120A&cp=596F8192B05A5E1";

//体育
export const sports = JsonBird + "https://www.toutiao.com/api/pc/feed/?category=news_sports&utm_source=toutiao&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A1D5F9C62F618C8&cp=596F2158ACE83E1";

