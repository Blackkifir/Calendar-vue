<script></script>

<template>
  <div class="calendar">
    <table class="tableFirst">
      <tbody>
        <tr v-for="name in 7" :key="name" class="tableFirst__blockName">
          <td class="tableFirst__blockName__name">name</td>
        </tr>
      </tbody>
    </table>
    <table class="tableSecond">
      <thead>
        <tr class="tableSecond__blockDate">
          <th v-for="date in 7" :key="date" class="tableSecond__blockDate__date">23-04-55</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="block in 7" :key="block" class="tableSecond__blockInfo">
          <td v-for="day in 7" :key="day" class="tableSecond__blockInfo__currentDay"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.calendar {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: transparent;
}

.tableFirst {
  border-collapse: collapse;
  width: 25%;
  height: 500px;

  &__blockName {
    border: 1px solid #f5f5f5;

    &__name {
      border: 1px solid #f5f5f5;
      padding: 20px;
      font-size: 16px;
      line-height: 20px;
    }
  }
}

.tableSecond {
  border-collapse: collapse;
  width: 85%;
  height: 530px;

  &__blockDate {
    border: 1px solid #f5f5f5;

    &__date {
      border: 1px solid #f5f5f5;
      height: 30px;
    }
  }

  &__blockInfo {
    &__currentDay {
      border: 1px solid #f5f5f5;
    }
  }
}
</style>