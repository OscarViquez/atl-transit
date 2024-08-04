import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'core-icon-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="130"
      height="32"
      viewBox="0 0 130 32"
      fill="none">
      <path
        d="M49.2612 14.9999H47.3975L51.585 3.36353H53.6134L57.8009 14.9999H55.9373L52.6475 5.47716H52.5566L49.2612 14.9999ZM49.5737 10.4431H55.6191V11.9204H49.5737V10.4431ZM63.112 6.27262V7.63625H58.3449V6.27262H63.112ZM59.6233 4.18171H61.3222V12.4374C61.3222 12.7669 61.3714 13.0151 61.4699 13.1817C61.5684 13.3446 61.6953 13.4563 61.8506 13.5169C62.0097 13.5738 62.182 13.6022 62.3676 13.6022C62.504 13.6022 62.6233 13.5927 62.7256 13.5738C62.8279 13.5548 62.9074 13.5397 62.9642 13.5283L63.271 14.9317C63.1726 14.9696 63.0324 15.0075 62.8506 15.0454C62.6688 15.087 62.4415 15.1097 62.1688 15.1135C61.7218 15.1211 61.3051 15.0416 60.9188 14.8749C60.5324 14.7082 60.2199 14.4507 59.9813 14.1022C59.7426 13.7537 59.6233 13.3162 59.6233 12.7897V4.18171ZM67.1176 3.36353V14.9999H65.4187V3.36353H67.1176ZM72.1829 15.1931C71.6298 15.1931 71.1298 15.0908 70.6829 14.8863C70.2359 14.6779 69.8817 14.3768 69.6204 13.9829C69.3628 13.5889 69.234 13.106 69.234 12.534C69.234 12.0416 69.3287 11.6363 69.5181 11.3181C69.7075 10.9999 69.9632 10.748 70.2851 10.5624C70.6071 10.3768 70.967 10.2366 71.3647 10.1419C71.7624 10.0472 72.1677 9.97527 72.5806 9.92603C73.1033 9.86542 73.5276 9.81618 73.8533 9.7783C74.1791 9.73663 74.4158 9.67034 74.5635 9.57944C74.7113 9.48853 74.7851 9.3408 74.7851 9.13625V9.09648C74.7851 8.60027 74.645 8.2158 74.3647 7.94307C74.0882 7.67034 73.6753 7.53398 73.126 7.53398C72.5541 7.53398 72.1033 7.66087 71.7738 7.91466C71.448 8.16466 71.2226 8.44307 71.0976 8.74989L69.501 8.38625C69.6904 7.85595 69.967 7.42792 70.3306 7.10216C70.698 6.77262 71.1204 6.53398 71.5976 6.38625C72.0749 6.23474 72.5768 6.15898 73.1033 6.15898C73.4518 6.15898 73.8211 6.20065 74.2113 6.28398C74.6052 6.36353 74.9726 6.51125 75.3135 6.72716C75.6582 6.94307 75.9404 7.25178 76.1601 7.6533C76.3798 8.05103 76.4897 8.56807 76.4897 9.20444V14.9999H74.8306V13.8067H74.7624C74.6526 14.0264 74.4878 14.2423 74.2681 14.4544C74.0484 14.6666 73.7662 14.8427 73.4215 14.9829C73.0768 15.123 72.6639 15.1931 72.1829 15.1931ZM72.5522 13.8294C73.0219 13.8294 73.4234 13.7366 73.7567 13.551C74.0939 13.3654 74.3495 13.123 74.5238 12.8238C74.7018 12.5207 74.7908 12.1969 74.7908 11.8522V10.7272C74.7302 10.7878 74.6128 10.8446 74.4385 10.8976C74.2681 10.9469 74.073 10.9904 73.8533 11.0283C73.6336 11.0624 73.4196 11.0946 73.2113 11.1249C73.0029 11.1514 72.8287 11.1741 72.6885 11.1931C72.359 11.2347 72.0579 11.3048 71.7851 11.4033C71.5162 11.5018 71.3003 11.6438 71.1374 11.8294C70.9783 12.0113 70.8988 12.2537 70.8988 12.5567C70.8988 12.9772 71.0541 13.2954 71.3647 13.5113C71.6753 13.7234 72.0711 13.8294 72.5522 13.8294ZM80.6913 9.81807V14.9999H78.9925V6.27262H80.6232V7.69307H80.7311C80.9319 7.23095 81.2463 6.85974 81.6743 6.57944C82.1061 6.29913 82.6497 6.15898 83.305 6.15898C83.8997 6.15898 84.4205 6.28398 84.8675 6.53398C85.3144 6.78019 85.661 7.14762 85.9072 7.63625C86.1535 8.12489 86.2766 8.72906 86.2766 9.44875V14.9999H84.5777V9.6533C84.5777 9.02072 84.4129 8.52641 84.0834 8.17034C83.7538 7.8105 83.3012 7.63057 82.7254 7.63057C82.3315 7.63057 81.9811 7.7158 81.6743 7.88625C81.3713 8.05671 81.1307 8.30671 80.9527 8.63625C80.7785 8.96201 80.6913 9.35595 80.6913 9.81807ZM92.8688 6.27262V7.63625H88.1018V6.27262H92.8688ZM89.3802 4.18171H91.0791V12.4374C91.0791 12.7669 91.1283 13.0151 91.2268 13.1817C91.3253 13.3446 91.4522 13.4563 91.6075 13.5169C91.7666 13.5738 91.9389 13.6022 92.1245 13.6022C92.2609 13.6022 92.3802 13.5927 92.4825 13.5738C92.5847 13.5548 92.6643 13.5397 92.7211 13.5283L93.0279 14.9317C92.9294 14.9696 92.7893 15.0075 92.6075 15.0454C92.4257 15.087 92.1984 15.1097 91.9257 15.1135C91.4787 15.1211 91.062 15.0416 90.6757 14.8749C90.2893 14.7082 89.9768 14.4507 89.7382 14.1022C89.4995 13.7537 89.3802 13.3162 89.3802 12.7897V4.18171ZM97.5279 15.1931C96.9748 15.1931 96.4748 15.0908 96.0279 14.8863C95.5809 14.6779 95.2267 14.3768 94.9654 13.9829C94.7078 13.5889 94.579 13.106 94.579 12.534C94.579 12.0416 94.6737 11.6363 94.8631 11.3181C95.0525 10.9999 95.3082 10.748 95.6301 10.5624C95.9521 10.3768 96.312 10.2366 96.7097 10.1419C97.1074 10.0472 97.5127 9.97527 97.9256 9.92603C98.4483 9.86542 98.8726 9.81618 99.1983 9.7783C99.5241 9.73663 99.7608 9.67034 99.9085 9.57944C100.056 9.48853 100.13 9.3408 100.13 9.13625V9.09648C100.13 8.60027 99.99 8.2158 99.7097 7.94307C99.4332 7.67034 99.0203 7.53398 98.471 7.53398C97.8991 7.53398 97.4483 7.66087 97.1188 7.91466C96.793 8.16466 96.5676 8.44307 96.4426 8.74989L94.846 8.38625C95.0354 7.85595 95.312 7.42792 95.6756 7.10216C96.043 6.77262 96.4654 6.53398 96.9426 6.38625C97.4199 6.23474 97.9218 6.15898 98.4483 6.15898C98.7968 6.15898 99.1661 6.20065 99.5563 6.28398C99.9502 6.36353 100.318 6.51125 100.659 6.72716C101.003 6.94307 101.286 7.25178 101.505 7.6533C101.725 8.05103 101.835 8.56807 101.835 9.20444V14.9999H100.176V13.8067H100.108C99.9976 14.0264 99.8328 14.2423 99.6131 14.4544C99.3934 14.6666 99.1112 14.8427 98.7665 14.9829C98.4218 15.123 98.0089 15.1931 97.5279 15.1931ZM97.8972 13.8294C98.3669 13.8294 98.7684 13.7366 99.1017 13.551C99.4389 13.3654 99.6945 13.123 99.8688 12.8238C100.047 12.5207 100.136 12.1969 100.136 11.8522V10.7272C100.075 10.7878 99.9578 10.8446 99.7835 10.8976C99.6131 10.9469 99.418 10.9904 99.1983 11.0283C98.9786 11.0624 98.7646 11.0946 98.5563 11.1249C98.3479 11.1514 98.1737 11.1741 98.0335 11.1931C97.704 11.2347 97.4029 11.3048 97.1301 11.4033C96.8612 11.5018 96.6453 11.6438 96.4824 11.8294C96.3233 12.0113 96.2438 12.2537 96.2438 12.5567C96.2438 12.9772 96.3991 13.2954 96.7097 13.5113C97.0203 13.7234 97.4161 13.8294 97.8972 13.8294Z"
        fill="#1F1F1F" />
      <path
        d="M47.4404 22.6718V21.7272H53.069V22.6718H50.7998V28.9999H49.7061V22.6718H47.4404ZM53.8111 28.9999V23.5454H54.8374V24.4118H54.8942C54.9937 24.1183 55.1689 23.8874 55.4198 23.7194C55.6731 23.5489 55.9596 23.4637 56.2792 23.4637C56.3455 23.4637 56.4236 23.466 56.5136 23.4708C56.6059 23.4755 56.6781 23.4814 56.7302 23.4885V24.5042C56.6876 24.4923 56.6118 24.4793 56.5029 24.4651C56.394 24.4485 56.2851 24.4402 56.1762 24.4402C55.9253 24.4402 55.7015 24.4935 55.505 24.6C55.3109 24.7042 55.157 24.8498 55.0434 25.0368C54.9298 25.2215 54.8729 25.4322 54.8729 25.6689V28.9999H53.8111ZM59.3376 29.1206C58.9919 29.1206 58.6794 29.0567 58.4001 28.9289C58.1207 28.7987 57.8994 28.6105 57.736 28.3642C57.575 28.118 57.4945 27.8162 57.4945 27.4587C57.4945 27.1509 57.5537 26.8976 57.6721 26.6988C57.7905 26.4999 57.9503 26.3425 58.1515 26.2265C58.3527 26.1105 58.5776 26.0229 58.8262 25.9637C59.0748 25.9045 59.3281 25.8595 59.5861 25.8287C59.9128 25.7909 60.178 25.7601 60.3816 25.7364C60.5852 25.7104 60.7332 25.6689 60.8255 25.6121C60.9178 25.5553 60.964 25.463 60.964 25.3351V25.3103C60.964 25.0001 60.8764 24.7598 60.7012 24.5894C60.5284 24.4189 60.2703 24.3337 59.9271 24.3337C59.5696 24.3337 59.2878 24.413 59.0819 24.5716C58.8783 24.7279 58.7374 24.9019 58.6593 25.0937L57.6614 24.8664C57.7798 24.5349 57.9526 24.2674 58.1799 24.0638C58.4095 23.8579 58.6735 23.7087 58.9718 23.6164C59.2701 23.5217 59.5838 23.4743 59.9128 23.4743C60.1307 23.4743 60.3615 23.5004 60.6053 23.5525C60.8515 23.6022 61.0812 23.6945 61.2942 23.8294C61.5097 23.9644 61.686 24.1573 61.8234 24.4083C61.9607 24.6569 62.0293 24.98 62.0293 25.3777V28.9999H60.9924V28.2542H60.9498C60.8811 28.3915 60.7781 28.5264 60.6408 28.659C60.5035 28.7916 60.3271 28.9017 60.1117 28.9892C59.8963 29.0768 59.6382 29.1206 59.3376 29.1206ZM59.5684 28.2684C59.8619 28.2684 60.1129 28.2104 60.3212 28.0944C60.5319 27.9784 60.6917 27.8268 60.8006 27.6398C60.9119 27.4504 60.9675 27.248 60.9675 27.0326V26.3294C60.9297 26.3673 60.8563 26.4028 60.7474 26.436C60.6408 26.4668 60.5189 26.494 60.3816 26.5177C60.2443 26.539 60.1105 26.5591 59.9803 26.578C59.8501 26.5946 59.7412 26.6088 59.6536 26.6206C59.4476 26.6467 59.2594 26.6905 59.089 26.752C58.9209 26.8136 58.786 26.9024 58.6842 27.0184C58.5847 27.132 58.535 27.2835 58.535 27.4729C58.535 27.7357 58.6321 27.9346 58.8262 28.0695C59.0203 28.2021 59.2677 28.2684 59.5684 28.2684ZM64.6554 25.7613V28.9999H63.5936V23.5454H64.6127V24.4331H64.6802C64.8057 24.1443 65.0022 23.9123 65.2697 23.7371C65.5396 23.5619 65.8793 23.4743 66.2889 23.4743C66.6606 23.4743 66.9861 23.5525 67.2654 23.7087C67.5448 23.8626 67.7614 24.0922 67.9153 24.3976C68.0692 24.703 68.1461 25.0806 68.1461 25.5304V28.9999H67.0843V25.6583C67.0843 25.2629 66.9813 24.954 66.7754 24.7314C66.5694 24.5065 66.2865 24.3941 65.9267 24.3941C65.6805 24.3941 65.4615 24.4473 65.2697 24.5539C65.0803 24.6604 64.93 24.8167 64.8187 25.0226C64.7098 25.2262 64.6554 25.4724 64.6554 25.7613ZM73.8075 24.877L72.8451 25.0475C72.8049 24.9244 72.741 24.8072 72.6534 24.6959C72.5681 24.5847 72.4521 24.4935 72.3054 24.4225C72.1586 24.3515 71.9751 24.316 71.7549 24.316C71.4543 24.316 71.2033 24.3834 71.0021 24.5184C70.8009 24.6509 70.7002 24.8226 70.7002 25.0333C70.7002 25.2156 70.7677 25.3624 70.9027 25.4736C71.0376 25.5849 71.2554 25.676 71.5561 25.7471L72.4225 25.9459C72.9244 26.0619 73.2985 26.2407 73.5447 26.4821C73.7909 26.7236 73.914 27.0373 73.914 27.4232C73.914 27.7499 73.8193 28.0411 73.6299 28.2968C73.4429 28.5501 73.1813 28.749 72.8451 28.8934C72.5113 29.0378 72.1242 29.11 71.6839 29.11C71.0731 29.11 70.5748 28.9798 70.1889 28.7194C69.803 28.4566 69.5662 28.0837 69.4787 27.6008L70.5049 27.4445C70.5689 27.712 70.7002 27.9144 70.8991 28.0517C71.098 28.1867 71.3572 28.2542 71.6768 28.2542C72.0248 28.2542 72.303 28.182 72.5113 28.0375C72.7197 27.8908 72.8238 27.712 72.8238 27.5013C72.8238 27.3309 72.7599 27.1876 72.6321 27.0716C72.5066 26.9556 72.3136 26.868 72.0532 26.8088L71.1299 26.6064C70.6209 26.4904 70.2445 26.3058 70.0007 26.0525C69.7592 25.7991 69.6385 25.4784 69.6385 25.0901C69.6385 24.7681 69.7284 24.4864 69.9083 24.2449C70.0883 24.0035 70.3368 23.8152 70.6541 23.6803C70.9713 23.543 71.3347 23.4743 71.7443 23.4743C72.3338 23.4743 72.7978 23.6022 73.1363 23.8579C73.4749 24.1112 73.6986 24.4509 73.8075 24.877ZM75.2315 28.9999V23.5454H76.2932V28.9999H75.2315ZM75.7677 22.7037C75.583 22.7037 75.4244 22.6422 75.2918 22.5191C75.1616 22.3936 75.0965 22.2445 75.0965 22.0716C75.0965 21.8964 75.1616 21.7473 75.2918 21.6242C75.4244 21.4987 75.583 21.436 75.7677 21.436C75.9523 21.436 76.1098 21.4987 76.24 21.6242C76.3726 21.7473 76.4388 21.8964 76.4388 22.0716C76.4388 22.2445 76.3726 22.3936 76.24 22.5191C76.1098 22.6422 75.9523 22.7037 75.7677 22.7037ZM80.4179 23.5454V24.3976H77.4385V23.5454H80.4179ZM78.2375 22.2385H79.2992V27.3983C79.2992 27.6043 79.33 27.7594 79.3916 27.8635C79.4531 27.9653 79.5324 28.0352 79.6295 28.0731C79.7289 28.1086 79.8367 28.1263 79.9527 28.1263C80.0379 28.1263 80.1125 28.1204 80.1764 28.1086C80.2403 28.0967 80.29 28.0873 80.3255 28.0802L80.5173 28.9573C80.4557 28.981 80.3681 29.0046 80.2545 29.0283C80.1409 29.0544 79.9988 29.0686 79.8284 29.0709C79.549 29.0757 79.2886 29.0259 79.0471 28.9218C78.8056 28.8176 78.6103 28.6566 78.4612 28.4388C78.312 28.221 78.2375 27.9476 78.2375 27.6185V22.2385ZM90.6646 24.0922H89.5566C89.514 23.8555 89.4347 23.6472 89.3187 23.4672C89.2027 23.2873 89.0607 23.1346 88.8926 23.0091C88.7245 22.8837 88.5363 22.789 88.3279 22.725C88.122 22.6611 87.903 22.6292 87.671 22.6292C87.2519 22.6292 86.8767 22.7345 86.5453 22.9452C86.2162 23.1559 85.9558 23.4649 85.764 23.8721C85.5746 24.2793 85.4799 24.7764 85.4799 25.3635C85.4799 25.9554 85.5746 26.4549 85.764 26.8621C85.9558 27.2693 86.2174 27.5771 86.5488 27.7854C86.8803 27.9937 87.2531 28.0979 87.6674 28.0979C87.8971 28.0979 88.1149 28.0671 88.3208 28.0056C88.5292 27.9417 88.7174 27.8481 88.8855 27.725C89.0536 27.6019 89.1956 27.4516 89.3116 27.274C89.43 27.0941 89.5117 26.8882 89.5566 26.6561L90.6646 26.6597C90.6054 27.0172 90.4906 27.3463 90.3201 27.6469C90.152 27.9452 89.9354 28.2033 89.6703 28.4211C89.4075 28.6365 89.1068 28.8034 88.7683 28.9218C88.4297 29.0401 88.0604 29.0993 87.6603 29.0993C87.0306 29.0993 86.4695 28.9502 85.9771 28.6519C85.4847 28.3512 85.0964 27.9215 84.8123 27.3628C84.5306 26.8041 84.3897 26.1377 84.3897 25.3635C84.3897 24.587 84.5318 23.9206 84.8159 23.3642C85.1 22.8055 85.4882 22.377 85.9806 22.0787C86.4731 21.7781 87.033 21.6277 87.6603 21.6277C88.0462 21.6277 88.4061 21.6834 88.7399 21.7946C89.076 21.9035 89.3779 22.0645 89.6454 22.2776C89.9129 22.4883 90.1343 22.7463 90.3095 23.0517C90.4847 23.3548 90.603 23.7016 90.6646 24.0922ZM94.34 29.11C93.8286 29.11 93.3824 28.9928 93.0012 28.7584C92.62 28.524 92.3241 28.1962 92.1134 27.7748C91.9027 27.3534 91.7974 26.8609 91.7974 26.2975C91.7974 25.7317 91.9027 25.2369 92.1134 24.8131C92.3241 24.3893 92.62 24.0603 93.0012 23.8259C93.3824 23.5915 93.8286 23.4743 94.34 23.4743C94.8513 23.4743 95.2976 23.5915 95.6788 23.8259C96.0599 24.0603 96.3558 24.3893 96.5665 24.8131C96.7772 25.2369 96.8826 25.7317 96.8826 26.2975C96.8826 26.8609 96.7772 27.3534 96.5665 27.7748C96.3558 28.1962 96.0599 28.524 95.6788 28.7584C95.2976 28.9928 94.8513 29.11 94.34 29.11ZM94.3435 28.2187C94.675 28.2187 94.9496 28.1311 95.1674 27.9559C95.3852 27.7807 95.5462 27.5475 95.6503 27.2563C95.7569 26.9651 95.8101 26.6443 95.8101 26.2939C95.8101 25.9459 95.7569 25.6263 95.6503 25.3351C95.5462 25.0416 95.3852 24.806 95.1674 24.6285C94.9496 24.4509 94.675 24.3621 94.3435 24.3621C94.0097 24.3621 93.7327 24.4509 93.5126 24.6285C93.2948 24.806 93.1326 25.0416 93.0261 25.3351C92.9219 25.6263 92.8698 25.9459 92.8698 26.2939C92.8698 26.6443 92.9219 26.9651 93.0261 27.2563C93.1326 27.5475 93.2948 27.7807 93.5126 27.9559C93.7327 28.1311 94.0097 28.2187 94.3435 28.2187ZM99.2796 25.7613V28.9999H98.2178V23.5454H99.237V24.4331H99.3044C99.4299 24.1443 99.6264 23.9123 99.8939 23.7371C100.164 23.5619 100.503 23.4743 100.913 23.4743C101.285 23.4743 101.61 23.5525 101.89 23.7087C102.169 23.8626 102.386 24.0922 102.539 24.3976C102.693 24.703 102.77 25.0806 102.77 25.5304V28.9999H101.708V25.6583C101.708 25.2629 101.605 24.954 101.4 24.7314C101.194 24.5065 100.911 24.3941 100.551 24.3941C100.305 24.3941 100.086 24.4473 99.8939 24.5539C99.7045 24.6604 99.5542 24.8167 99.4429 25.0226C99.334 25.2262 99.2796 25.4724 99.2796 25.7613ZM106.642 29.11C106.114 29.11 105.659 28.9904 105.278 28.7513C104.899 28.5098 104.608 28.1772 104.405 27.7535C104.201 27.3297 104.099 26.8444 104.099 26.2975C104.099 25.7435 104.203 25.2546 104.412 24.8309C104.62 24.4047 104.914 24.0721 105.292 23.833C105.671 23.5939 106.117 23.4743 106.631 23.4743C107.045 23.4743 107.415 23.5513 107.739 23.7052C108.063 23.8567 108.325 24.0697 108.524 24.3444C108.725 24.619 108.845 24.9398 108.883 25.3067H107.849C107.792 25.051 107.662 24.8309 107.459 24.6462C107.257 24.4615 106.987 24.3692 106.649 24.3692C106.353 24.3692 106.094 24.4473 105.871 24.6036C105.651 24.7575 105.479 24.9776 105.356 25.2641C105.233 25.5482 105.172 25.8844 105.172 26.2726C105.172 26.6704 105.232 27.0136 105.353 27.3025C105.474 27.5913 105.644 27.815 105.864 27.9736C106.087 28.1322 106.348 28.2115 106.649 28.2115C106.85 28.2115 107.032 28.1749 107.196 28.1015C107.362 28.0257 107.5 27.918 107.611 27.7783C107.725 27.6386 107.804 27.4705 107.849 27.274H108.883C108.845 27.6268 108.73 27.9417 108.538 28.2187C108.346 28.4956 108.09 28.7134 107.768 28.8721C107.448 29.0307 107.073 29.11 106.642 29.11ZM112.519 29.11C111.982 29.11 111.519 28.9952 111.13 28.7655C110.745 28.5335 110.446 28.208 110.236 27.789C110.027 27.3676 109.923 26.874 109.923 26.3081C109.923 25.7494 110.027 25.257 110.236 24.8309C110.446 24.4047 110.74 24.0721 111.116 23.833C111.495 23.5939 111.938 23.4743 112.444 23.4743C112.752 23.4743 113.05 23.5252 113.339 23.627C113.628 23.7288 113.887 23.8886 114.117 24.1064C114.347 24.3242 114.528 24.6071 114.66 24.9552C114.793 25.3008 114.859 25.721 114.859 26.2158V26.5922H110.523V25.7968H113.819C113.819 25.5174 113.762 25.27 113.648 25.0546C113.535 24.8368 113.375 24.6651 113.169 24.5397C112.965 24.4142 112.726 24.3515 112.451 24.3515C112.153 24.3515 111.893 24.4249 111.67 24.5716C111.45 24.716 111.28 24.9054 111.159 25.1398C111.04 25.3718 110.981 25.624 110.981 25.8962V26.5177C110.981 26.8822 111.045 27.1924 111.173 27.4481C111.303 27.7037 111.484 27.899 111.716 28.034C111.948 28.1666 112.219 28.2329 112.53 28.2329C112.731 28.2329 112.914 28.2044 113.08 28.1476C113.246 28.0884 113.389 28.0008 113.51 27.8848C113.63 27.7688 113.723 27.6256 113.787 27.4552L114.792 27.6363C114.711 27.9322 114.567 28.1914 114.358 28.414C114.152 28.6341 113.893 28.8058 113.581 28.9289C113.271 29.0496 112.917 29.11 112.519 29.11ZM116.187 31.0454V23.5454H117.224V24.4296H117.313C117.374 24.316 117.463 24.1846 117.579 24.0354C117.695 23.8863 117.856 23.7561 118.062 23.6448C118.268 23.5311 118.54 23.4743 118.879 23.4743C119.319 23.4743 119.712 23.5856 120.058 23.8081C120.404 24.0307 120.675 24.3515 120.871 24.7705C121.07 25.1895 121.169 25.6938 121.169 26.2833C121.169 26.8728 121.071 27.3782 120.875 27.7996C120.678 28.2186 120.408 28.5418 120.065 28.7691C119.722 28.994 119.33 29.1064 118.89 29.1064C118.558 29.1064 118.287 29.0508 118.076 28.9395C117.868 28.8283 117.705 28.6981 117.586 28.5489C117.468 28.3998 117.377 28.2672 117.313 28.1512H117.249V31.0454H116.187ZM117.228 26.2726C117.228 26.6561 117.283 26.9923 117.395 27.2811C117.506 27.57 117.667 27.7961 117.878 27.9594C118.088 28.1204 118.346 28.2009 118.652 28.2009C118.969 28.2009 119.234 28.1169 119.447 27.9488C119.66 27.7783 119.821 27.5475 119.93 27.2563C120.041 26.9651 120.097 26.6372 120.097 26.2726C120.097 25.9128 120.043 25.5896 119.934 25.3032C119.827 25.0167 119.666 24.7906 119.451 24.6249C119.238 24.4592 118.971 24.3763 118.652 24.3763C118.344 24.3763 118.084 24.4556 117.87 24.6142C117.66 24.7729 117.5 24.9942 117.391 25.2783C117.282 25.5624 117.228 25.8938 117.228 26.2726ZM125.055 23.5454V24.3976H122.076V23.5454H125.055ZM122.875 22.2385H123.937V27.3983C123.937 27.6043 123.967 27.7594 124.029 27.8635C124.091 27.9653 124.17 28.0352 124.267 28.0731C124.366 28.1086 124.474 28.1263 124.59 28.1263C124.675 28.1263 124.75 28.1204 124.814 28.1086C124.878 28.0967 124.927 28.0873 124.963 28.0802L125.155 28.9573C125.093 28.981 125.006 29.0046 124.892 29.0283C124.778 29.0544 124.636 29.0686 124.466 29.0709C124.186 29.0757 123.926 29.0259 123.685 28.9218C123.443 28.8176 123.248 28.6566 123.099 28.4388C122.949 28.221 122.875 27.9476 122.875 27.6185V22.2385Z"
        fill="#373637" />
      <mask
        id="mask0_6417_4917"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="32">
        <path d="M32 0H0V32H32V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_6417_4917)">
        <mask
          id="mask1_6417_4917"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32">
          <path
            d="M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z"
            fill="white" />
        </mask>
        <g mask="url(#mask1_6417_4917)">
          <path
            d="M25.2993 -2.32276L15.8957 -11.7263L-13.3047 17.4741L-3.90108 26.8777L25.2993 -2.32276Z"
            fill="#F37521" />
          <path
            d="M35.4736 7.37005L25.4614 -2.64209L-2.31445 25.1338L7.69768 35.1459L35.4736 7.37005Z"
            fill="#FCB117" />
          <path
            d="M42.9683 16.0759L34.0728 7.18042L7.88623 33.3669L16.7818 42.2624L42.9683 16.0759Z"
            fill="#0393CF" />
        </g>
      </g>
    </svg>
  `,
})
export class IconLogoComponent {}