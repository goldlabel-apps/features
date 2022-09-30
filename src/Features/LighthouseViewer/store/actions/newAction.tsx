import { AppThunk } from "../../../featuresStore"
import { setSharedKey } from "../../../Shared"

export const newAction = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "info",
      message: `Opening "newAction"`,
    }}));
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notifying', value: {
      severity: "error",
      message: `new Action > ${error.toString()}`,
    }}))
  }
}
