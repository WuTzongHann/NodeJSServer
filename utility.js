import { status } from '@grpc/grpc-js'

const statusesByCodes = new Map([
  [status.OK, 'OK'],
  [status.CANCELLED, 'Canceled'],
  [status.UNKNOWN, 'Unknown'],
  [status.INVALID_ARGUMENT, 'InvalidArgument'],
  [status.DEADLINE_EXCEEDED, 'DeadlineExceeded'],
  [status.NOT_FOUND, 'NotFound'],
  [status.ALREADY_EXISTS, 'AlreadyExists'],
  [status.PERMISSION_DENIED, 'PermissionDenied'],
  [status.RESOURCE_EXHAUSTED, 'ResourceExhausted'],
  [status.FAILED_PRECONDITION, 'FailedPrecondition'],
  [status.ABORTED, 'Aborted'],
  [status.OUT_OF_RANGE, 'OutOfRange'],
  [status.UNIMPLEMENTED, 'Unimplemented'],
  [status.INTERNAL, 'Internal'],
  [status.UNAVAILABLE, 'Unavailable'],
  [status.DATA_LOSS, 'DataLoss'],
  [status.UNAUTHENTICATED, 'Unauthenticated']
])

export { status, statusesByCodes }
