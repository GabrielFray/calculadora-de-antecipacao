import { useContext } from "react";
import { useForm } from "react-hook-form";
import Anticipation from "../Anticipation";
import { ICalculatorData } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { formCalculatorSchema } from "../../validators";
import { CalculatorContent, ErrorMessage, Input } from "./styles";
import { CalculatorContext } from "../../context/CalculatorContext";

const Calculator = () => {
  const { onSubmitCalculator } = useContext(CalculatorContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICalculatorData>({
    resolver: yupResolver(formCalculatorSchema),
    shouldFocusError: false,
  });

  return (
    <CalculatorContent>
      <div className="contentForm">
        <h2>Simule sua Antecipação</h2>
        <form
          className="calculatorForm"
          onChange={handleSubmit(onSubmitCalculator)}
        >
          <div>
            <label htmlFor="amount">Informe o valor da venda *</label>
            <Input
              id="amount"
              type="number"
              placeholder="Valor da venda"
              {...register("amount", { valueAsNumber: true })}
            />
            <ErrorMessage>{errors.amount?.message}</ErrorMessage>
          </div>
          <div>
            <label htmlFor="installments">Em quantas parcelas *</label>
            <Input
              id="installments"
              type="number"
              placeholder="Quantas parcelas"
              {...register("installments", { valueAsNumber: true })}
            />
            <ErrorMessage>{errors.installments?.message}</ErrorMessage>
          </div>
          <div>
            <label htmlFor="mdr">Informe o percentual de MDR *</label>
            <Input
              id="mdr"
              type="number"
              placeholder="Percentual MDR"
              {...register("mdr", { valueAsNumber: true })}
            />
            <ErrorMessage>{errors.mdr?.message}</ErrorMessage>
          </div>
        </form>
      </div>
      <Anticipation />
    </CalculatorContent>
  );
};

export default Calculator;
