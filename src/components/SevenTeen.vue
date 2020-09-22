<template>
  <div id="cal">
    <h1>{{ msg }}</h1>
    <p>永遠的17歲年齡計算器</p>
    <input type="number" v-model="birth_yy">
    <input type="number" v-model="birth_mm">
    <input type="number" v-model="birth_dd">
    <p>您的生日:{{birth_yy}} - {{birth_mm}} - {{birth_dd}}</p>
    <p>您的年齡:{{user_years_old_yy}}歲又{{user_years_old_dd}}天</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data: function(){
    return {
      birth_yy: 1987,
      birth_mm: 1,
      birth_dd: 31,
      user_years_old_yy: 17,
    }
  },
  methods: {
    cal_years: function() {
      
    }
  },
  computed: {
    user_years_old_dd: function () {
      let dd = Number(this.birth_yy) + 17;
      
      return dd
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input[type=number]{
  width: 100px;
}

</style>
