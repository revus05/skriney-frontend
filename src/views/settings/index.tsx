import { withHomeLayout } from 'widgets/layouts/home'
import { SettingsList } from 'widgets/settings/list'

const SettingsPage = () => {
  return (
    <div className={'flex flex-col gap-6'}>
      <h2 className={'text-[32px] leading-8 font-bold'}>Настройки</h2>
      <SettingsList />
    </div>
  )
}

export default withHomeLayout(SettingsPage)
