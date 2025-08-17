import { withHomeLayout } from 'widgets/layouts'
import { SettingsList } from 'widgets/user-settings'

const SettingsPage = () => {
  return (
    <div className={'flex flex-col gap-6'}>
      <h2 className={'text-[32px] leading-8 font-bold'}>Настройки</h2>
      <SettingsList />
    </div>
  )
}

export default withHomeLayout(SettingsPage)
