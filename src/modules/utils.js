import { Notify, Loading, QSpinnerCube } from 'quasar'
import { routerInstance } from 'boot/router'
import * as storage from 'src/modules/storage'

const removeToken = () => {
  storage.deleteLocalToken()
  storage.deleteHeaderToken()
  storage.deleteUser()
  routerInstance.replace('/login')
}

const notifErr = (resp) => {
  const msg = resp ? resp.data.message : 'Ada Kesalahan, Harap ulamgi!'
  const status = resp.status ? resp.status : 500

  // unauthenticated
  console.log('utility', resp)
  if (resp.status === 401 && resp.statusText === 'Unauthorized') {
    return removeToken()
  }

  //   if (status === 200) {

  if (status === 422) {
    const msgs = resp.data.errors
    for (const key in msgs) {
      Notify.create({
        message: msgs[key][0],
        icon: 'icon-eva-message-circle-outline',
        position: 'bottom-right',
        color: 'negative',
        actions: [
          { label: 'Dismiss', color: 'yellow', handler: () => { /* console.log('wooow') */ } }
        ]
      })
    }
  } else {
    Notify.create({
      message: msg,
      icon: 'icon-eva-message-circle-outline',
      position: 'bottom-right',
      color: 'negative',
      actions: [
        { label: 'Dismiss', color: 'yellow', handler: () => { /* console.log('wooow') */ } }
      ]
    })
  }
}
const notifSuccess = (resp) => {
  const msg = resp ? resp.data.message : 'Sucees Wow!, Kerja Bagus!'
  Notify.create({
    message: msg,
    icon: 'icon-mat-thumb_up_off_alt',
    position: 'bottom-right',
    actions: [
      { label: 'Dismiss', color: 'yellow', handler: () => { /* console.log('wooow') */ } }
    ]
  })
}
const notifErrVue = (msg) => {
  Notify.create({
    message: msg,
    icon: 'icon-eva-message-circle-outline',
    position: 'bottom-right',
    color: 'negative',
    actions: [
      { label: 'Dismiss', color: 'yellow', handler: () => { /* console.log('wooow') */ } }
    ]
  })
}

const waitLoad = (cond) => {
  if (cond === 'show') {
    Loading.show({
      message: 'Harap bersabar. Menunggu...',
      boxClass: 'bg-dark text-white',
      spinner: QSpinnerCube,
      // spinnerColor: 'yellow',
      spinnerSize: 30
    })
  } else {
    Loading.hide()
  }
}

export { notifSuccess, notifErr, notifErrVue, waitLoad }
