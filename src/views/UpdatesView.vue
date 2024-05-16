<template>
  <div>
    <img src="@/assets/images/coming_soon.jpg" />
  </div>
</template>

<script setup></script>

<style scoped>
.section-with-background {
  @apply relative bg-[rgba(0,196,179,1)] bg-[url('@/assets/images/manifesto_bg.svg')] bg-cover bg-center py-12;
}

::-webkit-scrollbar {
  width: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(77, 72, 72);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ee3b26;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
</style>
