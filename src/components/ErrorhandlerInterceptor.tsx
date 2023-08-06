import { AxiosError } from "axios";
import { FC } from "react";
import { useResponseInterceptor } from "../hooks/AxiosInterceptors";
import { useAppDispatch } from "../redux/hooks";
import { createSnack } from "../redux/Snacks/slices/snacks";

export interface IErrorHandlerInterceptorProps {
  children: React.ReactNode;
}

const ErrorHandlerInterceptor: FC<IErrorHandlerInterceptorProps> = ({
  children,
}) => {
  const dispatch = useAppDispatch();

  const onSuccessResponse = () => {};

  const onErrorResponse = (err: AxiosError) => {
    dispatch(
      createSnack({
        message: err.message,
        severity: "error",
      }),
    );
  };

  useResponseInterceptor(onSuccessResponse, onErrorResponse);

  return children;
};

export default ErrorHandlerInterceptor;
