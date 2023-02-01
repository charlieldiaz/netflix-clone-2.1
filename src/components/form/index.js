import React from "react";
import { Container, Error, Title, Base, Text, TextSmall, Link, Input, Submit } from "./styles/form";

export default function Form ({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Form.Input = function FormInput({children, ...restProps}){
    return <Input{...restProps}>{children}</Input>
}

Form.Link = function FormLink({children, ...restProps}){
    return <Link{...restProps}>{children}</Link>
}

Form.TextSmall = function FormTextSmall({children, ...restProps}){
    return <TextSmall{...restProps}>{children}</TextSmall>
}

Form.Text = function FormText({children, ...restProps}){
    return <Text{...restProps}>{children}</Text>
}

Form.Base = function FormBase({children, ...restProps}){
    return <Base{...restProps}>{children}</Base>
}
Form.Title = function FormTitle({children, ...restProps}){
    return <Title{...restProps}>{children}</Title>
}
Form.Error = function FormError({children, ...restProps}){
    return <Error{...restProps}>{children}</Error>
}

Form.Submit = function FormSubmit({children, ...restProps}){
    return <Submit{...restProps}>{children}</Submit>
}