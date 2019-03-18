import { Component } from '@angular/core';

import { IHotelItem, IFilterButtonsData } from './models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-city';
  activeHotelIndex = 0;
  hotels: IHotelItem[] = [
    {
      id: 10001,
      title: 'Hotel Kharkov',
      address: 'Украина,61022, Харьков, пл. Свободы, 7',
      // tslint:disable-next-line:max-line-length
      description: 'Гостиница «Харьков» — это современный четырехзвездочный гостиничный комплекс, имеющий все необходимое для обеспечения максимального комфорта и уюта. Высотное здание гостиницы является одной из визитных карточек города. Комфортабельные номера, просторные конференц-залы с полным комплектом мультимедийного оборудования, ресторан, салон красоты, а также перечень дополнительных услуг — все для Вас.',
      phone: '+3242353434',
      picture: 'assets/images/hotels/10001/830661_372x372.jpg',
      photos: [
        'assets/images/hotels/10001/457198_890x565.jpg',
        'assets/images/hotels/10001/457201_372x372.jpg',
        'assets/images/hotels/10001/457201_890x565.jpg',
        'assets/images/hotels/10001/830661_372x372.jpg',
        'assets/images/hotels/10001/830661_890x565.jpg'
      ],
      weather:  {
        temperature: 12,
        wind: 11,
        icon: 'sun'
      },
      profile: {
        followers: 112,
        following: 11,
        photo: 'assets/images/b1.jpg'
      },
      stars: 4,
      active: 1
    },
    {
      id: 10002,
      title: 'Artua Hotel Club',
      address: 'Украина,61022, Харьков, пл. Свободы, 8',
      // tslint:disable-next-line:max-line-length
      description: 'Месторасположение: Среди лучших гостиниц Харькова её уникальное 			расположение позволяет гостям почувствовать себя вдали от городской суеты, оставаясь при этом совсем недалеко от делового центра города. Удобная транспортная развязка, близкое расположение от аквапарка Джунгли и Аэропорта. Количество номеров: 22. Типы номеров: Одноместные и двухместные номера - Standart, Superior, Junior, Suite, Suite, De Luxe, а  также двух комнатный VIP.',
      phone: '+3242353434',
      picture: 'assets/images/hotels/10002/5337474_600x450.jpg',
      photos: [
        'assets/images/hotels/10002/5337474_600x450.jpg',
        'assets/images/hotels/10002/447711_890x565.jpg',
        'assets/images/hotels/10002/464198_890x565.jpg',
        'assets/images/hotels/10002/464199_890x565.jpg'
      ],
      weather:  {
        temperature: 5,
        wind: 4,
        icon: 'rain'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: 'assets/images/b2.jpg'
      },
      stars: 4
    },
    {
      id: 10003,
      title: 'Premier Palace Hotel Kharkiv',
      address: 'Украина,61022, Харьков, пл. Свободы, 9',
      // tslint:disable-next-line:max-line-length
      description: 'Premier Palace Hotel Kharkiv - первый в городе отель класса luxury+, воплощающий идею сдержанной роскоши третьего тысячелетия. Отель спроектирован в характерном для Харькова стиле конструктивизма и органично вписывается в ансамбль центральной площади города площади Свободы. В отелегармонично сочетаются изысканность современной классики с функциональностью и ультрасовременным комфортом, созданным новыми технологиями. Premier Palace Hotel Kharkiv -современное видение концепции гранд-отелей, которые со временем становятся настоящими легендами.Premier Palace Hotel Kharkiv - первый в городе отель класса luxury+, воплощающий идею сдержанной роскоши третьего тысячелетия. Отель спроектирован в характерном для Харькова стиле конструктивизма и органично вписывается в ансамбль центральной площади города площади Свободы. В отелегармонично сочетаются изысканность современной классики с функциональностью и ультрасовременным комфортом, созданным новыми технологиями. Premier Palace Hotel Kharkiv -современное видение концепции гранд-отелей, которые со временем становятся настоящими легендами.',
      phone: '+3242353434',
      picture: 'assets/images/hotels/10003/797270_890x565.jpg',
      photos: [
        'assets/images/hotels/10003/797270_890x565.jpg',
        'assets/images/hotels/10003/797269_890x565.jpg',
        'assets/images/hotels/10003/797271_890x565.jpg',
        'assets/images/hotels/10003/846506_890x565.jpg'
      ],
      weather:  {
        temperature: -2,
        wind: 2,
        icon: 'cloud'
      },
      profile: {
        followers: 45,
        following: 78,
        photo: 'assets/images/b3.jpg'
      },
      stars: 5
    },
    {
      id: 10004,
      title: 'PARK-HOTEL',
      address: 'Украина,61022, Харьков, пл. Свободы, 10',
      // tslint:disable-next-line:max-line-length
      description: 'Все номера оснащены всем необходимым для хорошего настроения и удобства гостей. Также помимо основных услуг в стоимость номера входит бесплатное посещение тренажерного зала и бесплатное посещение банного комплекса (с 06.00 до 12.00). Уютный однокомнатный номер Econom, средней площадью 15 м2, оснащен: двуспальной кроватью, бесплатным Wi-Fi и скоростным кабельным Интернетом, персональным сейфом, мини-баром, ТВ с плоским экраном, спутниковым телевидением, телефоном с прямым международным доступом, индивидуальной системой кондиционирования и отопления. Расположены на первом этаже. Максимальное количество людей в номере – 2 человека.',
      phone: '+3242353434',
      picture: 'assets/images/hotels/10004/1088668_890x565.jpg',
      photos: [
        'assets/images/hotels/10004/1088668_890x565.jpg',
        'assets/images/hotels/10004/658847_890x565.jpg',
        'assets/images/hotels/10004/1088667_890x565.jpg',
        'assets/images/hotels/10004/1088669_890x565.jpg',
        'assets/images/hotels/10004/1088686_224x168.jpg',
        'assets/images/hotels/10004/1088688_890x565.jpg',
        'assets/images/hotels/10004/1088689_890x565.jpg',
        'assets/images/hotels/10004/1088690_890x565.jpg',
        'assets/images/hotels/10004/1088691_740x550.jpg',
        'assets/images/hotels/10004/1088691_890x565.jpg',
        'assets/images/hotels/10004/1088692_740x550.jpg',
        'assets/images/hotels/10004/1088693_740x550.jpg'
      ],
      weather:  {
        temperature: -2,
        wind: 2,
        icon: 'cloud'
      },
      profile: {
        followers: 45,
        following: 78,
        photo: 'assets/images/b3.jpg'
      },
      stars: 4
    }
  ];
  hotelFilters = {searchText: '', stars: []};

  elementSelect($event: IHotelItem) {
    // tslint:disable-next-line:forin
    for (const ind in this.hotels) {
      const el = this.hotels[ind];
      if ($event.id === el.id) {
        el.active = 1;
        this.activeHotelIndex = parseInt(ind, 10);
      } else {
        el.active = 0;
      }
    }
  }

  getSelectedElement(): IHotelItem {
    return this.hotels[this.activeHotelIndex];
  }

  hotelsDistinctStars(): number[] {
    const numbers = [];
    // tslint:disable-next-line:forin
    for (const ind in this.hotels) {
      const el = this.hotels[ind];
      if (numbers.indexOf(el.stars) === -1) {
        numbers.push(el.stars);
      }
    }
    return numbers;
  }

  hotelsFilters() {
    return [{name: 'Stars', code: 'stars', values: this.hotelsDistinctStars()}];
  }

  onFilterSelect($event) {
    this.hotelFilters.searchText = $event.searchText;
    this.hotelFilters.stars = $event.stars;
  }

  filteredHotels(): IHotelItem[] {
    const hotels = [];
    // tslint:disable-next-line:forin
    for (const ind in this.hotels) {
      const hotel = this.hotels[ind];
      const text = this.hotelFilters.searchText;
      const stars = this.hotelFilters.stars;
      if (text.length > 0 && hotel.title.indexOf(text) === -1) {
        continue;
      }
      if (stars.length > 0 && stars.indexOf(hotel.stars) === -1) {
        continue;
      }
      hotels.push(hotel);
    }
    return hotels;
  }

}
