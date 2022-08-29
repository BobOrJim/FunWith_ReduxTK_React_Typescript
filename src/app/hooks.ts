// meta syftet med denna hook, är att wrappa mitt state. Och erbjuda övriga programm ett enkelt interface bestående av
//useAppDispatch och useAppSelector.
//dvs där övrigt program skickar en action till useAppDispatch utan att behöva funder på types.
//Eller att en selector skickas till useAppSelector.

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
