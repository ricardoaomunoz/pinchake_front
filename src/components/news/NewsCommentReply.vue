<template>
  <BaseInfoCard title="Leave a Reply">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <BaseTextField label="Name" />

        <BaseTextField label="Email" />

        <BaseTextField label="Phone" />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <BaseTextarea
          label="Message"
          rows="6"
        />
      </v-col>

      <v-col
        class="py-0"
        cols="12"
      >
        <BaseBtn>Submit Comment</BaseBtn>
      </v-col>
    </v-row>
  </BaseInfoCard>
</template>

<script setup>
  //
</script>
