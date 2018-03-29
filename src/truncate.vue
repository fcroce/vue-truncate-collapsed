<template>
    <div>
        <div v-if="!show">
            <span :class="textClass">{{truncate}}</span>
            <a v-if="text.length > length" @click="toggle()" :class="actionClass">{{clamp || 'Read More'}}</a>
        </div>
        <div v-if="show && type !== 'html'">
            <span>{{text}}</span>
            <a @click="toggle()" v-if="text.length > length" :class="actionClass">{{less || 'Show Less'}}</a>
        </div>
        <div v-else-if="show && type === 'html'">
            <div v-html="text" v-if="text.length > length"></div>
            <a @click="toggle()" v-if="text.length > length" :class="actionClass">{{less || 'Show Less'}}</a>
            <p v-else>{{h2p(text)}}</p>
        </div>
    </div>
</template>

<script>
const defaultLength = 100;

let h2p = require("html2plaintext");

export default {
  name: "truncate",
  props: {
    text: String,
    length: {
      Number,
      default: defaultLength
    },
    clamp: String,
    less: String,
    type: {
      type: String,
      default: "text"
    },
    actionClass: {
      type: String,
      default: ""
    },
    doNotTruncateLastWord: {
      String,
      required: false
    },
    collapsedTextClass: {
      type: String,
      required: false
    }
  },
  computed: {
    textClass() {
      return this.plainText().length > this.length && this.collapsedTextClass
        ? this.collapsedTextClass
        : "";
    },
    truncate() {
      if (!this.plainText()) {
        return "";
      }

      if (this.doNotTruncateLastWord === "true") {
        return this.lastWordTruncate();
      }

      return this.simpleTruncate();
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    plainText() {
      return this.type === "html" ? h2p(this.text) : this.text;
    },
    lastWordTruncate() {
      const split = this.plainText()
        .toString()
        .split(" ");
      let truncate = "";

      for (const word of split) {
        if (truncate.length + word.length >= this.length) {
          break;
        }

        truncate += word + " ";
      }

      return truncate;
    },
    simpleTruncate() {
      return this.plainText()
        .toString()
        .substring(0, this.length);
    },
    toggle() {
      this.show = !this.show;
    },
    h2p
  }
};
</script>

<style lang="css" scoped>
    a {
        cursor: pointer;
    }
</style>
