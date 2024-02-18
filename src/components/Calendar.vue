<script>
import axios from 'axios';
import { API_URL } from '../services/apiConfig.js';
import Loader from './Loader.vue';
import Popup from './Popup.vue';

export default {
  components: {
    Loader,
    Popup,
  },
  data() {
    return {
      calendarItems: this.$store.state.items,
      calendarLoading: this.$store.state.loading,
    }
  },
  methods: {
    async getDataCalendar() {
      try {
        const response = await axios.get(API_URL);
        this.calendarItems = response.data;
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    }
  },
  mounted() {
    this.getDataCalendar();
  },
}
</script>

<template>
  <div v-if="calendarItems.length > 0" class="calendar">
    <table class="tableFirst">
      <tbody>
        <tr
          v-for="(item, index) in calendarItems"
          v-show="index < 7"
          :key="item.id"
          class="tableFirst__blockName"
        >
          <td class="tableFirst__blockName__name">{{ item.roomDetails.name }}</td>
        </tr>
      </tbody>
    </table>
    <table class="tableSecond">
      <thead>
        <tr class="tableSecond__blockDate">
          <th
            v-for="(item, index) in calendarItems"
            v-show="index < 7"
            :key="item.id"
            class="tableSecond__blockDate__date"
          >
            {{ item.start }}
          </th>
        </tr>
        <tr class="tableSecond__blockDate">
          <th
            v-for="(item, index) in calendarItems"
            v-show="index < 7"
            :key="item.id"
            class="tableSecond__blockDate__date"
          >
            {{ item.end }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="block in 7" :key="block" class="tableSecond__blockInfo">
          <td v-for="day in 7" :key="day" class="tableSecond__blockInfo__currentDay" />
        </tr>
      </tbody>
    </table>
    <!-- <Popup /> -->
  </div>
  <div v-else>
    <Loader />
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
  height: 470px;

  &__blockName {
    border: 1px solid #f5f5f5;

    &__name {
      border: 1px solid #f5f5f5;
      padding: 20px;
      font-size: 16px;
      line-height: 20px;
      color: rgb(20, 198, 138);
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
      color: rgb(16, 178, 124);
    }
  }

  &__blockInfo {
    &__currentDay {
      border: 1px solid #f5f5f5;
    }
  }
}
</style>