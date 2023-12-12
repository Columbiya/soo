import { Button, Container } from '@/components'
import cl from './style.module.scss'
import { ButtonKind, ButtonSize, ButtonType } from '@/types'

export const Banner = () => {
	return (
		<Container>
			<div className={cl.banner}>
				<div className={cl.bannerContent}>
					<h3 className={cl.bannerTitle}>
						ГИСОГД РБ - Государственная информационная система обеспечения
						градостроительной деятельности Республики Башкортостан
					</h3>

					<p>
						Система республиканского уровня с интегрированной базой данных,
						содержащей градостроительную документацию для целей упрощения
						процедур и сокращения сроков предоставления услуг в электронном виде
					</p>

					<Button
						buttonKind={ButtonKind.Rounded}
						buttonSize={ButtonSize.Default}
						buttonType={ButtonType.White}
						className={cl.button}
						href="http://gisogdrb.ru"
						target="_blank"
					>
						Подробнее
					</Button>
				</div>

				<img
					src="/images/project/details/banner-background.svg"
					alt=""
					className={cl.bannerImage}
				/>
			</div>
		</Container>
	)
}
