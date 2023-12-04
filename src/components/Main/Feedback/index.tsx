import { ReactNode } from 'react'

import { Alert, Banner, BlockTitle, Container, List } from '@/components'
import { ListTypes } from '@/components/List/types'

import { AlertTypes } from '@/components/Alert/type'
import { Form } from './Form'

import cl from './style.module.scss'

const items: ReactNode[] = [
	'Опишите вопрос, связанный с участием в общественных обсуждениях.Укажите в тексте как можно больше информации:',
	'Название общественного обсуждения или ссылку на него',
	'Опишите проблему или приложите текст ошибки',
	'Последовательность действий, которая приводит к проблеме или ошибке, приложите снимок экрана'
]

const BackgroundImage = () => (
	<svg
		width="102"
		height="1087"
		viewBox="0 0 102 1087"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={cl.backgroundImage}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M-72.4238 -6.83687L-38.3905 -41.2916L-50.3104 -53.0657L-90.2731 -12.6082L-96.2025 -6.60544L-90.1574 -0.719207L-63.2521 25.4791L-87.6236 49.8961L-93.5726 55.8562L-87.5815 61.7741L-49.3716 99.5167L-37.5975 87.5968L-69.8162 55.7721L-51.2473 37.1685L-9.47603 77.8421L-35.2882 103.123L-41.373 109.083L-35.3136 115.068L-9.59814 140.469L-53.3904 184.85L-74.7207 164.08L-40.6874 129.625L-52.6073 117.851L-92.57 158.308L-98.4994 164.311L-92.4543 170.197L-65.1586 196.776L-90.2848 222.24L-96.1688 228.203L-90.2058 234.087L-52.4133 271.378L-40.6454 259.452L-72.4748 228.045L-53.1544 208.465L-11.7729 248.759L-37.5851 274.04L-43.6699 279.999L-37.6105 285.985L-11.74 311.539L-56.2938 355.906L-77.4138 335.341L-43.3805 300.887L-55.3004 289.112L-95.2631 329.57L-101.192 335.573L-95.1474 341.459L-68.1673 367.73L-92.5956 392.056L-98.5808 398.017L-92.5714 403.952L-54.3616 441.695L-42.5875 429.775L-74.788 397.968L-56.1619 379.42L-14.9087 419.589L-40.3795 445.402L-46.2604 451.362L-40.3035 457.246L-12.9729 484.243L-56.4646 527.815L-77.4734 507.359L-43.4401 472.904L-55.36 461.13L-95.3227 501.587L-101.252 507.59L-95.207 513.476L-68.3017 539.675L-92.6732 564.091L-98.6222 570.052L-92.6311 575.969L-54.4212 613.712L-42.6471 601.792L-74.8658 569.967L-56.2969 551.364L-14.5256 592.038L-40.3378 617.319L-46.4226 623.278L-40.3632 629.263L-13.8257 655.476L-57.709 699.442L-78.7179 678.985L-44.6845 644.53L-56.6044 632.756L-96.5672 673.213L-102.497 679.216L-96.4515 685.102L-69.5461 711.301L-93.9176 735.718L-99.8667 741.678L-93.8755 747.596L-55.6657 785.338L-43.8915 773.418L-76.1103 741.594L-57.5413 722.99L-15.7701 763.664L-41.5823 788.945L-47.667 794.904L-41.6076 800.89L-15.1695 827.004L-57.7089 869.623L-78.7178 849.166L-44.6844 814.712L-56.6043 802.937L-96.567 843.395L-102.496 849.398L-96.4513 855.284L-69.546 881.482L-93.9175 905.899L-99.8666 911.859L-93.8754 917.777L-55.6655 955.52L-43.8914 943.6L-76.1101 911.775L-57.5412 893.172L-15.77 933.845L-41.5822 959.126L-47.6669 965.086L-41.6075 971.071L-11.743 1000.57L-57.7099 1046.62L-78.7188 1026.17L-44.6854 991.712L-56.6053 979.938L-96.568 1020.4L-102.497 1026.4L-96.4523 1032.28L-69.547 1058.48L-93.9185 1082.9L-99.8676 1088.86L-93.8764 1094.78L-55.6665 1132.52L-43.8924 1120.6L-76.1111 1088.78L-57.5422 1070.17L-15.771 1110.85L-41.5832 1136.13L-47.6679 1142.09L-41.6085 1148.07L-9.57963 1179.71L-3.61968 1185.6L2.26739 1179.64L33.9045 1147.61L39.8339 1141.6L33.7888 1135.72L8.20941 1110.81L51.3972 1068.51L70.5957 1087.83L39.1577 1120.13L51.1645 1131.82L88.3486 1093.61L94.0946 1087.71L88.2873 1081.86L63.3672 1056.79L89.4975 1031.19L95.4971 1025.32L89.6062 1019.33L50.2656 979.364L38.3248 991.117L71.7744 1025.1L51.5569 1044.9L5.9 998.959L33.9055 970.607L39.8349 964.604L33.7898 958.718L8.21042 933.81L51.3981 891.511L70.5967 910.831L39.1587 943.133L51.1655 954.819L88.3496 916.612L94.0956 910.708L88.2883 904.864L63.3682 879.788L89.4985 854.195L95.4981 848.319L89.6071 842.334L50.2666 802.364L38.3258 814.117L71.7754 848.101L51.5578 867.903L9.27814 825.357L33.9054 800.425L39.8348 794.422L33.7897 788.536L8.21029 763.629L51.398 721.33L70.5966 740.649L39.1586 772.951L51.1654 784.637L88.3494 746.43L94.0955 740.526L88.2882 734.683L63.3681 709.606L89.4984 684.013L95.498 678.137L89.607 672.152L50.2665 632.182L38.3256 643.935L71.7753 677.92L51.5577 697.721L9.18661 655.084L35.1499 628.799L41.0792 622.796L35.0342 616.91L9.45474 592.003L52.6425 549.703L71.8411 569.023L40.403 601.325L52.4098 613.011L89.5939 574.804L95.3399 568.9L89.5327 563.056L64.6125 537.98L90.7428 512.387L96.7424 506.511L90.8515 500.526L51.5109 460.556L39.5701 472.309L73.0197 506.293L52.8022 526.095L9.64316 482.664L35.2095 456.782L41.1389 450.779L35.0938 444.893L8.86364 419.352L51.9553 375.681L72.0913 395.55L40.9792 427.08L52.9052 438.848L89.9013 401.355L95.7853 395.392L89.8223 389.508L63.7232 363.755L89.4493 337.683L95.3333 331.72L89.3702 325.836L51.2709 288.242L39.503 300.168L71.6393 331.878L51.7972 351.987L11.5127 312.237L37.9026 285.52L43.832 279.517L37.7869 273.631L12.2075 248.724L55.3952 206.425L74.5938 225.744L43.1557 258.047L55.1625 269.732L92.3466 231.526L98.0926 225.622L92.2854 219.778L67.3652 194.701L93.4955 169.108L99.4951 163.232L93.6042 157.247L54.2636 117.277L42.3228 129.03L75.7724 163.015L55.5549 182.816L14.063 141.063L40.1995 114.603L46.1289 108.601L40.0838 102.714L14.5044 77.8071L57.6921 35.508L76.8907 54.8274L45.4526 87.1298L57.4594 98.8153L94.6435 60.6089L100.39 54.7049L94.5823 48.8611L69.6621 23.7843L95.7924 -1.80834L101.792 -7.68453L95.9011 -13.6697L56.5605 -53.6393L44.6197 -41.8863L78.0693 -7.9019L57.8518 11.8996L4.66637 -41.6203L4.27436 -41.2308L3.80311 -41.7011L-51.415 13.6199L-72.4238 -6.83687ZM-39.4101 25.3093L2.49708 66.1154L45.8817 23.6234L4.1693 -18.3514L-39.4101 25.3093ZM2.53125 89.5339L-17.48 109.133L2.52948 128.898L22.3502 108.832L2.53125 89.5339ZM0.200174 237.032L-41.3862 196.538L1.93835 152.632L43.5848 194.54L0.200174 237.032ZM-19.7769 280.05L0.23434 260.451L20.0533 279.749L0.232595 299.815L-19.7769 280.05ZM-2.55254 580.311L-44.4598 539.505L-0.880318 495.844L40.8321 537.819L-2.55254 580.311ZM-22.5296 623.329L-2.51837 603.729L17.3006 623.027L-2.52013 643.094L-22.5296 623.329ZM-0.464915 323.956L40.0293 363.913L-3.14052 407.663L-44.2885 367.596L-0.464915 323.956ZM-22.5725 451.21L-2.90453 431.278L17.3602 451.01L-2.46049 471.076L-22.5725 451.21ZM-2.20508 518.107L17.6611 537.73L-1.17719 556.802L-21.0434 537.179L-2.20508 518.107ZM-3.79699 751.937L-45.7042 711.131L-2.12476 667.47L39.5877 709.445L-3.79699 751.937ZM-23.7741 794.955L-3.76281 775.355L16.0562 794.654L-3.76458 814.72L-23.7741 794.955ZM-3.44914 689.734L16.4171 709.357L-2.42125 728.428L-22.2874 708.805L-3.44914 689.734ZM-3.79686 922.119L-45.7041 881.313L-2.12464 837.652L39.5878 879.627L-3.79686 922.119ZM-23.774 965.137L-3.76269 945.537L16.0563 964.835L-3.76446 984.901L-23.774 965.137ZM-3.44902 859.915L16.4172 879.539L-2.42113 898.61L-22.2873 878.987L-3.44902 859.915ZM-3.79786 1099.12L-45.7051 1058.31L-2.12564 1014.65L39.5868 1056.63L-3.79786 1099.12ZM-23.775 1142.14L-3.76369 1122.54L16.0553 1141.84L-3.76546 1161.9L-23.775 1142.14ZM-3.45002 1036.92L16.4162 1056.54L-2.42213 1075.61L-22.2883 1055.99L-3.45002 1036.92ZM20.414 194.453L0.547848 174.829L-18.2904 193.901L1.57574 213.524L20.414 194.453ZM2.84375 3.91217L22.7099 23.5354L3.87164 42.6069L-15.9945 22.9837L2.84375 3.91217ZM17.7275 366.831L-2.13873 347.208L-20.977 366.279L-1.11084 385.902L17.7275 366.831Z"
			fill="white"
		/>
	</svg>
)

export const Feedback = () => {
	return (
		<section className={cl.feedback} id="feedback">
			<BackgroundImage />
			<Container className={cl.feedBackContainer}>
				<div>
					<BlockTitle>обратная связь</BlockTitle>

					<p className={cl.text}>
						Опишите вопрос, связанный с участием в общественных обсуждениях.
						Укажите в тексте как можно больше информации:
					</p>

					<List type={ListTypes.UL} items={items} />

					<Alert type={AlertTypes.DANGER} className={cl.alert}>
						<span className={cl.alertText}>
							Важно! Вопросы по содержанию и материалам проекта, вынесенного на
							обсуждение, не связанные с техническими проблемами, можно задать
							на странице интересующего вас проекта, выбрав блок «Консультация»
						</span>
					</Alert>
				</div>
				<div>
					<Form />
				</div>
			</Container>

			<Banner />
		</section>
	)
}
