import {Component, View, bootstrap} from 'angular2/angular2';
import {FormBuilder, Validators, Control} from 'angular2/forms';

@Component({
  selector: 'tweet-box',
  injectables: [FormBuilder]
})
@View({
  templateUrl: 'components/tweetbox/templates/tweetbox.html'
})
export class TweetBox {
  charCount: number;
  maxLen: number;
  maxChars: boolean;

  constructor() {
    this.maxLen = 140;
    this.charCount = this.maxLen;
    this.maxChars = false;
    this.tweetText = new Control();
  }

  updateCharCount(e) {
    var len = e.target.value.length;
    this.charCount = this.maxLen - len;
    this.maxChars = (len > this.maxLen);
  }
}
bootstrap(TweetBox);
