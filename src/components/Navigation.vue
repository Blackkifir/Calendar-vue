<script>
</script>

<template>
  <header class="header">
    <nav class="header__navigation">
      <button type="button" class="header__navigation__btn">&lt;</button>
      <button type="button" class="header__navigation__btn">&gt;</button>
      <button type="button" class="header__navigation__btn">Today</button>
    </nav>
  </header>
</template>

<style lang="scss">
  .header {
    margin-bottom: 30px;
    padding-top: 30px;
    
    &__navigation {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
       
        &__btn{
        transition: all .1s;
        border: none;
        border-radius: 5px;
        padding: 2px 20px 2px 20px;
        font-size: 25px;
        font-weight: 700;
        line-height: 30px;
        cursor: pointer;
        background-color: #f5f5f5;
        color: #383B40;
      }
      &__btn:hover {
        box-shadow: 0 0 5px rgba(245, 245, 245, 0.5);
      }
    }
  }
</style>