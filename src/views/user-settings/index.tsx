import { withHomeLayout } from 'widgets/layouts'
import { SettingsList } from 'widgets/user-settings'
import { Translate } from 'shared/ui'

const SettingsPage = () => {
  return (
    <div className={'flex flex-col gap-6'}>
      <h2 className={'text-[32px] leading-8 font-bold'}>
        <Translate value={'settings.title'} />
      </h2>
      <SettingsList />
    </div>
  )
}

export default withHomeLayout(SettingsPage)
