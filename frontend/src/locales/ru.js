export default {
  translation: {
    brandName: 'Hexlet Chat',
    statuses: {
      loading: 'Загрузка...',
    },
    channels: {
      title: 'Каналы',
    },
    messages: {
      count_one: '{{ count }} сообщение',
      count_few: '{{ count }} сообщения',
      count_many: '{{ count }} сообщений',
    },
    modals: {
      addChannel: {
        title: 'Добавить канал',
        success: 'Канал создан',
      },
      editChannel: {
        title: 'Переименовать канал',
        success: 'Канал переименован',
      },
      removeChannel: {
        title: 'Удалить канал',
        body: 'Уверены?',
        success: 'Канал удалён',
      },
    },
    forms: {
      signUp: {
        title: 'Регистрация',
        fields: {
          name: {
            label: 'Имя пользователя',
            errors: {
              required: 'Поле никнейм является обязательным',
              min: 'Никнейм: от 3 до 20 символов',
              max: 'Никнейм: от 3 до 20 символов',
            },
          },
          pass: {
            label: 'Пароль',
            errors: {
              required: 'Поле пароль является обязательным',
              min: 'Пароль: не менее 6 символов',
            },
          },
          passCheck: {
            label: 'Подтвердите пароль',
            errors: {
              notEqual: 'Пароли должны совпадать',
            },
          },
        },
        submit: 'Зарегистрироваться',
      },
      logIn: {
        title: 'Войти',
        fields: {
          name: {
            label: 'Ваш ник',
            errors: {
              required: 'Поле никнейм является обязательным',
            },
          },
          pass: {
            label: 'Пароль',
            errors: {
              required: 'Поле пароль является обязательным',
            },
          },
        },
        noAccount: 'Нет аккаунта?',
        linkToSignUp: 'Регистрация',
        submit: 'Войти',
      },
      addChannel: {
        fields: {
          name: {
            label: 'Имя канала',
            errors: {
              required: 'Обязательное поле',
              min: 'От 3 до 20 символов',
              max: 'От 3 до 20 символов',
              notUnique: 'Должно быть уникальным',
            },
          },
        },
        reset: 'Отменить',
        submit: 'Отправить',
      },
      editChannel: {
        fields: {
          name: {
            label: 'Имя канала',
            errors: {
              required: 'Обязательное поле',
              min: 'От 3 до 20 символов',
              max: 'От 3 до 20 символов',
              notUnique: 'Должно быть уникальным',
            },
          },
        },
        reset: 'Отменить',
        submit: 'Отправить',
      },
      removeChannel: {
        reset: 'Отменить',
        submit: 'Удалить',
      },
      chat: {
        fields: {
          msg: {
            sample: 'Введите сообщение...',
            label: 'Новое сообщение',
          },
        },
        submit: 'Отправить',
      },
    },
    buttons: {
      logOut: 'Выйти',
      goHome: 'Вернуться на главную',
      goBack: 'Назад',
      addChannel: '+',
      editChannel: 'Переименовать',
      removeChannel: 'Удалить',
      channelMenu: 'Управление каналом',
    },
    errors: {
      401: 'Неверные имя пользователя или пароль',
      409: 'Такой пользователь уже существует',
      default: 'Ошибка соединения. Попробуйте снова',
    },
    warnings: {
      general: 'Что-то пошло не так...',
      doesNotExist: 'Такой страницы не существует',
    },
  },
};
