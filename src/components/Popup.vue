<script></script>

<template>
  <div class="popup">
    <ul class="popup__list">
      <li>
        <h3 class="popup__list__name">
          Elvira
        </h3>
      </li>
      <li>
        <p class="popup__list__contact">
          phone +3831341
        </p>
      </li>
      <li>
        <p class="popup__list__email">
          email @gdrfgd#
        </p>
      </li>
      <li>
        <p class="popup__list__type">
          {#4r[2]}
        </p>
      </li>
      <li>
        <p class="popup__list__guests">
          Number of guests:
        </p>
      </li>
      <li>
        <p class="popup__list__adults">
          adults: 9
        </p>
      </li>
      <li>
        <p class="popup__list__children">
          children: 4
        </p>
      </li>
    </ul>
    <div class="closePopup">
      <button class="closePopup__btn">
        Close
      </button>
    </div>
  </div>
</template>

<style lang="scss">
  .popup {
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    border-radius: 5px;
    width: 210px;
    box-shadow: 0 0 5px rgba(245, 245, 245, 0.5);
    background-color: #383B40;
    color: rgb(20, 198, 138);

    &__list {
      border-bottom: 1px solid rgba(245, 245, 245, 0.5);
      padding: 30px 30px 0px 15px;
      list-style: none;

      &__name {
        margin-bottom: 10px;
        font-size: 20px;
      }
      
      &__contact {
        margin-bottom: 3px;
        font-size: 15px;
      }

      &__email {
        margin-bottom: 15px;
        font-size: 15px;
      }

      &__type {
        margin-bottom: 7px;
        font-size: 15px;
      }

      &__guests {
        margin-bottom: 4px;
        font-weight: 700;
      }

      &__adults {
        margin-bottom: 4px;
      }

      &__children {
        margin-bottom: 20px;
      }
    }
  }

  .closePopup {
    padding: 30px 30px 30px 15px;

    &__btn {
      transition: all .1s;
      border: none;
      border-radius: 5px;
      padding: 7px 23px 7px 23px;
      font-size: 13px;
      line-height: 20px;
      font-weight: 700;
      cursor: pointer;
    }
    &__btn:hover {
      transform: scale(1.04);
      box-shadow: 0 0 5px rgba(245, 245, 245, 0.5);
    }
  }
</style>