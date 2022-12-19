import Joi from "joi";



export const loginuser = Joi.object().keys({
    username: Joi.string().required().max(60).min(3),
    password: Joi.number().required()
})

export const adsId = Joi.object().keys({
    id: Joi.number().required().min(1)
})

export const adspost = Joi.object().keys({
    created_at: Joi.string().required(),
    birth_day: Joi.string().required(),
    external_direction: Joi.string().required(),
    internal_direction: Joi.string().required(),
    event_type: Joi.string().required(),
    ad_link: Joi.string().required(),
    yuridik_nomi: Joi.string().default("deleted"),
    ismi_sharifi: Joi.string().required(),
    professiya: Joi.string().required(),
    telefon_raqami: Joi.number().required(),
    qoshimcha_tel: Joi.number().required(),
    mavzu_matni: Joi.string().required(),
    description: Joi.string().required()
})

export const adspost2 = Joi.object().keys({
    created_at: Joi.string().required(),
    birth_day: Joi.string().required(),
    external_direction: Joi.string().required(),
    internal_direction: Joi.string().required(),
    event_type: Joi.string().required(),
    ad_link: Joi.string().required(),
    ismi_sharifi: Joi.string().required(),
    professiya: Joi.string().required(),
    telefon_raqami: Joi.number().required(),
    qoshimcha_tel: Joi.number().required(),
    mavzu_matni: Joi.string().required()
})





























