const columns = [
  {
    label: 'id',
    name: 'b_info.code',
    filter: {
      type: 'simple',
      placeholder: 'id',
    },
    sort: true,
    visibility: true,
    uniqueId: true,
  },
  {
    label: 'First Name',
    name: 'b_info.name',
    filter: {
      type: 'simple',
      placeholder: 'Enter last name',
      case_sensitive: true,
    },
    sort: true,
  },
  {
    label: 'market',
    name: 'b_info.market',
    filter: {
      type: 'simple',
      placeholder: 'Enter last name',
      case_sensitive: true,
    },
    sort: true,
  },
  {
    label: 'futures',
    name: 'b_info.futures',
    filter: {
      type: 'simple',
      placeholder: 'Enter phone',
    },
    sort: true,

    row_text_alignment: 'text-left',
    column_text_alignment: 'text-left',
  },
  {
    label: 'options',
    name: 'b_info.options',
    filter: {
      type: 'simple',
      placeholder: 'Enter email',
    },
    sort: true,
    row_text_alignment: 'text-left',
    column_text_alignment: 'text-left',
  },
  {
    label: 'data',
    name: 'b_info.data',
    sort: true,
  },
  {
    label: 'price',
    name: 'b_info.price',
    sort: true,
  },
  {
    label: 'change',
    name: 'b_info.change',
    filter: {
      type: 'simple',
      placeholder: 'Enter country',
    },
  },
]

const columns1 = [
  {
    label: 'id',
    name: 'id',
    filter: {
      type: 'simple',
      placeholder: 'id',
    },
    sort: true,
    visibility: true,
    uniqueId: true,
  },
  {
    label: 'First Name',
    name: 'name.first_name',
    filter: {
      type: 'select',
      placeholder: 'Enter first name',
      mode: 'multi',
      options: [
        {
          name: 'Irwin',
          value: 'Irwin',
        },
        {
          name: 'Don',
          value: 'Don',
        },
        {
          name: 'Lolita Paris',
          value: 'Lolita',
        },
      ],
    },
    sort: true,
  },
  {
    label: 'Last Name',
    name: 'name.last_name',
    filter: {
      type: 'simple',
      placeholder: 'Enter last name',
      case_sensitive: true,
    },
    sort: true,
  },
  {
    label: 'Phone',
    name: 'mobile',
    filter: {
      type: 'simple',
      placeholder: 'Enter phone',
    },
    sort: true,

    row_text_alignment: 'text-left',
    column_text_alignment: 'text-left',
  },
  {
    label: 'Email',
    name: 'email',
    filter: {
      type: 'simple',
      placeholder: 'Enter email',
    },
    sort: true,
    row_text_alignment: 'text-left',
    column_text_alignment: 'text-left',
  },
  {
    label: 'City',
    name: 'address.city',
    sort: true,
  },
  {
    label: 'Country',
    name: 'address.country',
    filter: {
      type: 'simple',
      placeholder: 'Enter country',
    },
  },
]
