import create from "zustand";

const useStore = create((set) => ({
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  stateCity: '',
  zip: '',
  phone: '',
  dob: '',
  cardFirstName: '',
  cardLastName: '',
  cardNum: '',
  expiry: '',
  cvv: '',
  setEmail: (email) => set((state)=> ({
    ...state,
    email,
  })),
  setPassword: (password) => set((state)=> ({
    ...state,
    password,
  })),
  setFirstName: (firstName) => set((state)=> ({
    ...state,
    firstName,
  })),
  setLastName: (lastName) => set((state)=> ({
    ...state,
    lastName,
  })),
  setAddress: (address) => set((state)=> ({
    ...state,
    address,
  })),
  setCity: (city) => set((state)=> ({
    ...state,
    city,
  })),
  setStateCity: (stateCity) => set((state)=> ({
    ...state,
    stateCity,
  })),
  setZip: (zip) => set((state)=> ({
    ...state,
    zip,
  })),
  setPhone: (phone) => set((state)=> ({
    ...state,
    phone,
  })),
  setDob: (dob) => set((state)=> ({
    ...state,
    dob,
  })),
  setCardFirstName: (cardFirstName) => set((state)=> ({
    ...state,
    cardFirstName,
  })),
  setCardLastName: (cardLastName) => set((state)=> ({
    ...state,
    cardLastName,
  })),
  setCardNum: (cardNum) => set((state)=> ({
    ...state,
    cardNum,
  })),
  setExpiry: (expiry) => set((state)=> ({
    ...state,
    expiry,
  })),
  setCvv: (cvv) => set((state)=> ({
    ...state,
    cvv,
  }))
}))

export default useStore