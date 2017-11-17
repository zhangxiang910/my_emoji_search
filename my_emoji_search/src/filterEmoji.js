/**
 * Created by zhangxiang on 2017/11/17.
 */
import emojiList from './emojiList.json';

function filterEmoji (searchText, maxResults) {
  return emojiList.filter(emoji => {
    if (emoji.title.includes(searchText)) {
      return true;
    }
    if (emoji.keywords.includes(searchText)) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}

export default filterEmoji;