<template>
  <!-- PENDAFTARAN -->
  <q-page class="q-pa-lg">
    <div class="row q-col-gutter-lg">
      <div class="col-md-7 col-xs-12">
        <app-card
          title="Pendaftaran"
          desc="pendaftaran pasien untuk dilanjutkan ke bagian pelayanan"
        >
          <template #content>
            <q-form class="q-pa-md">
              <div class="text-subtitle  text-weight-bold">
                I. IDENTITAS PASIEN
              </div>
              <q-separator />
              <div class="row q-col-gutter-lg q-mb-lg">
                <!-- identitas diri -->
                <div class="col-md-7 col-xs-12">
                  <app-input
                    v-model="store.form.no_rm"
                    dense
                    outlined
                    readonly
                    label="Nomor RM"
                    class="q-mt-sm"
                  />
                  <app-input
                    v-model="store.form.nama"
                    dense
                    label="Nama Lengkap *"
                    class="q-mt-sm"
                  />
                  <div class="row q-col-gutter-sm">
                    <app-input
                      v-model="store.form.nik"
                      dense
                      label="Nik *"
                      class="q-mt-sm"
                      style="width:50%"
                    />
                    <app-input
                      v-model="store.form.noka"
                      dense
                      label="No Ka BPJS *"
                      class="q-mt-sm"
                      style="width:50%"
                    />
                  </div>
                  <div class="row q-col-gutter-sm">
                    <app-input
                      v-model="store.form.tempat_lahir"
                      valid
                      label="Tempat Lahir"
                      class="q-mt-sm"
                      style="width:60%"
                    />
                    <app-input-date
                      :model="store.form.tanggal_lahir"
                      dense
                      label="Tanggal Lahir *"
                      class="q-mt-sm"
                      style="width:40%"
                    />
                  </div>

                  <div class="flex items-center q-mt-sm">
                    <q-select
                      v-model="store.form.agama"
                      :options="store.source.agama"
                      label="Pilih Agama"
                      dense
                      filled
                      hide-bottom-space
                      no-error-icon
                      lazy-rules
                      :rules="[(val) => (val && val.length > 0) || 'Harap diisi']"
                      style="width:50%"
                    />
                    <div class="">
                      <q-radio
                        v-model="store.form.gender"
                        size="sm"
                        val="L"
                        label="Laki-laki"
                        class="text-weight-regular"
                      />
                      <q-radio
                        v-model="store.form.gender"
                        size="sm"
                        val="P"
                        label="Perempuan"
                        class="text-weight-regular"
                      />
                    </div>
                  </div>
                  <div class="row q-col-gutter-sm">
                    <q-select
                      v-model="store.form.masa"
                      :options="store.source.masas"
                      label="Pilih Masa"
                      dense
                      filled
                      hide-bottom-space
                      no-error-icon
                      option-value="nama"
                      option-label="nama"
                      style="width:40%"
                      class="q-mt-sm"
                    />
                    <q-select
                      v-model="store.form.status_pernikahan"
                      :options="store.source.status_pernikahans"
                      label="Status Pernikahan"
                      dense
                      filled
                      hide-bottom-space
                      no-error-icon
                      style="width:60%"
                      class="q-mt-sm"
                    />
                  </div>
                  <div class="flex items-center q-mt-sm">
                    <div
                      style="width:40%"
                    >
                      <q-radio
                        v-model="store.form.kewarganegaraan"
                        size="sm"
                        val="WNI"
                        label="WNI"
                      />
                      <q-radio
                        v-model="store.form.kewarganegaraan"
                        size="sm"
                        val="WNA"
                        label="WNA"
                      />
                    </div>
                    <q-select
                      v-model="store.form.negara"
                      :options="store.source.negaras"
                      label="negara"
                      dense
                      filled
                      hide-bottom-space
                      no-error-icon
                      option-label="name"
                      option-value="name"
                      style="width:60%"
                    />
                  </div>
                </div>
                <!-- Alamat / Tempat Tinggal -->
                <div class="col-md-5 c0l-xs-12">
                  <app-input
                    dense
                    valid
                    label="Alamat"
                    class="q-mt-sm"
                  />
                  <app-input
                    dense
                    valid
                    label="Provinsi"
                    class="q-mt-sm"
                  />
                  <app-input
                    dense
                    valid
                    label="Kota / Kabupaten"
                    class="q-mt-sm"
                  />
                  <app-input
                    dense
                    valid
                    label="Kecamatan"
                    class="q-mt-sm"
                  />
                  <app-input
                    dense
                    valid
                    label="Kelurahan / Desa"
                    class="q-mt-sm"
                  />
                </div>
              </div>
              <div class="q-mt-lg text-subtitle  text-weight-bold">
                II. REGISTRASI / KUNJUNGAN
              </div>
              <q-separator />
            </q-form>
          </template>
        </app-card>
      </div>
      <div class="col-md-5 col-xs-12">
        <app-card
          title="List Pasien"
          desc="daftar seluruh registrasi pasien"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useFormPendaftaranStore } from 'src/stores/pendaftaran/form'

const store = useFormPendaftaranStore()
store.setToday()
</script>
